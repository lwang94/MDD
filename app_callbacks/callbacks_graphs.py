from dash.dependencies import Input, Output, State, MATCH, ALL
import dash_core_components as dcc
import dash_html_components as html
from dash.exceptions import PreventUpdate

import pandas as pd
import itertools

import app_util as au
import MDDClass as mc


def graphs_callbacks(app):

    @app.callback(
        [Output('graph_params', 'options'),
         Output('graph_params', 'value'),
         Output('lastslice', 'data')],
        [Input('slice_indices', 'data'),
         Input('moveaxis', 'layout')],
        [State('metadata', 'data'),
         State('graph_params', 'value')]
    )
    def def_graphparams(indices, layout, metadata, val_state):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
        )
        new_x = [layout[i]['x'] for i in range(len(layout))]
        new_y = [layout[i]['y'] for i in range(len(layout))]
        new_pos = [new_x[i] + new_y[i] * (max(new_x) + 1) for i in range(len(new_x))]
        new_name = [meta['Name'][new_pos.index(i)] for i in range(len(new_pos))]

        new_vals = []
        for i, name in enumerate(new_name):
            vals = meta.loc[meta['Name'] == name]['Values'].array[0]
            start = indices[name][0]
            stop = indices[name][1] + 1
            vals = vals[start: stop]
            new_vals.append(vals)

        if val_state is None:
            val_set = {}
        else:
            val_set = set(val_state)

        meta = meta.set_index('Name')
        options = []
        value = []
        for coord in itertools.product(*new_vals[:-1]):
            lab = ''
            ind = ''
            for i in range(len(coord)):
                lab += f'{new_name[i]}({coord[i]}) x '
                ind += str(
                    meta.loc[new_name[i], 'Values']
                    .index(coord[i])
                ) + ','
            lab += f'{new_name[-1]}'
            if ind[:-1] in val_set:
                value.append(ind[:-1])
            options.append({
                'label': lab,
                'value': ind[:-1]
            })

        last = (meta.loc[new_name[-1], 'Values'])
        lastslice = (
            str(last.index(new_vals[-1][0]))
            + ':'
            + str(last.index(new_vals[-1][-1]) + 1)
        )

        return options, value, lastslice

    app.clientside_callback(
        """
        function(graph_data, graph_lay) {
            return {
                'data': graph_data,
                'layout': graph_lay
            }
        }
        """,
        Output({'type': 'linegraph', 'index': MATCH}, 'figure'),
        [Input({'type': 'linegraph_data', 'index': MATCH}, 'data'),
         Input({'type': 'linegraph_lay', 'index': MATCH}, 'data')]
    )

    @app.callback(
        Output({'type': 'linegraph_data', 'index': ALL}, 'data'),
        [Input('mdd', 'data'),
         Input('lastslice', 'data')],
        [State('metadata', 'data'),
         State('moveaxis', 'layout'),
         State('graph_params', 'value'),
         State({'type': 'linegraph_data', 'index': ALL}, 'data'),
         State({'type': 'linegraph_data', 'index': ALL}, 'id')]
    )
    def update_graphdata(mdd_data, lastslice, metadata, moveaxis, vals, olddata, identity):
        graph_keys = {identity[i]['index']: i for i in range(len(identity))}
        mdd = mc.MDD(
            pd.DataFrame(metadata)
        )
        mdd.dataDF = pd.DataFrame(mdd_data)
        mdd.move_axis(au.new_pos(moveaxis))

        for i in range(len(vals)):
            key = graph_keys[vals[i]]

            val = vals[i].split(',')
            sing_vals = [int(j) for j in val]
            last_vals = [int(j) for j in lastslice.split(':')]

            x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
            slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
            y = mdd.dataArray[tuple(slice_list)]

            olddata[key][0]['x'] = x
            olddata[key][0]['y'] = y.flatten()

        return olddata

    @app.callback(
        Output({'type': 'linegraph_lay', 'index': MATCH}, 'data'),
        [Input({'type': 'linegraph', 'index': MATCH}, 'relayoutData'),
         Input('moveaxis', 'layout')],
        [State('metadata', 'data')]
    )
    def update_graphlay(reData):
        if 'title.text' in reData:
            return {'title': reData['title.text']}
        else:
            raise PreventUpdate
