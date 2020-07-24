import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH, ALL
from dash.exceptions import PreventUpdate

import bisect
import itertools
import json
import pandas as pd

import MDDClass as mc
import app_util as au


def graphs_callbacks(app):

    @app.callback(
        [Output('moveaxis', 'children'),
        Output('moveaxis', 'layout'),
        Output('moveaxis', 'divstyle'),
        Output('moveaxis', 'width'),
        Output('moveaxis', 'margin'),
        Output('moveaxis', 'numcolumns')],
        [Input('metadata', 'data')]
    )
    def graphslice_inputs(metadata):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
            .to_dict('records')
        )
        items = []
        for i, row in enumerate(meta):
            start = row['Values'][0]
            if i == len(meta) - 1:
                stop = row['Values'][-1]
            else:
                stop = row['Values'][0]

            graph_start = dcc.Input(
                id={'type': 'graph_start', 'index': row['Name']},
                type='text',
                value=start,
                style={
                    'width': 50,
                    'marginRight': 2
                }
            )

            graph_stop = dcc.Input(
                id={'type': 'graph_stop', 'index': row['Name']},
                type='text',
                value=stop,
                style={
                    'width': 50,
                    'marginLeft': 2
                }
            )

            graph_slider = dcc.RangeSlider(
                id={'type': 'graph_slider', 'index': row['Name']},
                min=row['Values'][0],
                max=row['Values'][-1],
                marks={i: '' for i in row['Values']},
                step=None,
                value=[start, stop],
                vertical=True,
                verticalHeight=175
            )

            validvalues = dcc.Store(
                id={'type': 'graph_validval', 'index': row['Name']},
                data=row['Values']
            )

            items.append(
                html.Div(
                    children=[
                        row['Name'],
                        html.Div(
                            children=[
                                graph_start,
                                graph_stop
                            ],
                            style={'display': 'inline-block'}
                        ),
                        html.Div(
                            graph_slider,
                            style={
                                'paddingLeft': 45,
                                'marginTop': -5
                            }
                        ),
                        validvalues
                    ]
                )
            )

        ncolumns = len(items)
        margin = [max((550 - 70 * ncolumns) / (2 * ncolumns), 10), 10]
        width = max(550, 90 * ncolumns)

        keys = [f'axis_{i}' for i in range(len(meta))]
        layout = au.define_draggrid(
            1,
            ncolumns,
            keys,
            isResizable=False
        )

        divstyle = {
            'borderRadius': '10px',
            'borderTop': '1px solid #607D8B',
            'borderLeft': '1px solid #607D8B',
            'textAlign': 'center'
        }

        return items, layout, divstyle, width, margin, ncolumns

    @app.callback(
        Output({'type': 'graph_slider', 'index': MATCH}, 'value'),
        [Input({'type': 'graph_start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'graph_stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'graph_start', 'index': MATCH}, 'value'),
         State({'type': 'graph_stop', 'index': MATCH}, 'value'),
         State({'type': 'graph_validval', 'index': MATCH}, 'data')]
    )
    def update_graphslider(nstart, nstop, start, stop, validval):
        if nstart is not None or nstop is not None:
            try:
                start_ind = bisect.bisect_left(validval, float(start))
                stop_ind = bisect.bisect_left(validval, float(stop))

                if start_ind >= len(validval):
                    start_ind = len(validval) - 1
                if stop_ind >= len(validval):
                    stop_ind = len(validval) - 1
                if stop_ind < start_ind:
                    stop_ind = start_ind

                start = validval[start_ind]
                stop = validval[stop_ind]
                value = [start, stop]
                return value
            except:
                raise PreventUpdate

    @app.callback(
        [Output({'type': 'graph_start', 'index': MATCH}, 'value'),
         Output({'type': 'graph_stop', 'index': MATCH}, 'value')],
        [Input({'type': 'graph_slider', 'index': MATCH}, 'value')]
    )
    def update_graphstartstop(sliderval):
        return sliderval[0], sliderval[1]

    @app.callback(
        [Output('graph_params', 'options'),
         Output('graph_params', 'value'),
         Output('lastslice', 'data')],
        [Input('moveaxis', 'layout'),
         Input({'type': 'graph_start', 'index': ALL}, 'value'),
         Input({'type': 'graph_stop', 'index': ALL}, 'value')],
        [State('metadata', 'data'),
         State({'type': 'graph_slider', 'index': ALL}, 'id'),
         State('graph_params', 'value')]
    )
    def create_graphparams(layout, start, stop, metadata, identity, param_state):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
        )
        new_pos = [layout[i]['x'] for i in range(len(layout))]
        new_name = [meta['Name'][new_pos.index(i)] for i in range(len(new_pos))]

        ind = {identity[i]['index']: [start[i], stop[i]] for i in range(len(identity))}
        new_vals = []
        for i, name in enumerate(new_name):
            vals = meta.loc[meta['Name'] == name]['Values'].array[0]
            start_ind = bisect.bisect_left(vals, ind[name][0])
            stop_ind = bisect.bisect_left(vals, ind[name][1]) + 1
            new_vals.append(vals[start_ind: stop_ind])

        if param_state is None:
            param_set = {}
        else:
            param_set = set(param_state)

        meta = meta.set_index('Name')
        options = []
        params = []
        for coord in itertools.product(*new_vals[:-1]):
            lab = ''
            val = ''
            for i in range(len(coord)):
                lab += f'{new_name[i]}({coord[i]}) x '
                val += str(
                    meta.loc[new_name[i], 'Values']
                    .index(coord[i])
                ) + ','
            lab += f'{new_name[-1]}'
            if val[:-1] in param_set:
                params.append(val[:-1])
            options.append({
                'label': lab,
                'value': val[:-1]
            })

        last = (meta.loc[new_name[-1], 'Values'])
        lastslice = (
            str(last.index(new_vals[-1][0]))
            + ':'
            + str(last.index(new_vals[-1][-1]) + 1)
        )

        return options, params, lastslice

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
        Output({'type': 'linegraph_lay', 'index': MATCH}, 'data'),
        [Input({'type': 'linegraph', 'index': MATCH}, 'relayoutData')],
        [State({'type': 'linegraph_lay', 'index': MATCH}, 'data')]
    )
    def update_graphlay(reData, old_lay):
        if 'title.text' in reData:
            old_lay['title'] = reData['title.text']
            return old_lay
        elif 'xaxis.title.text' in reData:
            old_lay['xaxis']['title'] = reData['xaxis.title.text']
            return old_lay
        elif 'yaxis.title.text' in reData:
            old_lay['yaxis']['title'] = reData['yaxis.title.text']
            return old_lay
        elif 'annotations[0].x' in reData or 'annotations[0].y' in reData:
            old_lay['annotations'][0]['x'] = reData['annotations[0].x']
            old_lay['annotations'][0]['y'] = reData['annotations[0].y']
            return old_lay
        elif 'legend.x' in reData or 'legend.y' in reData:
            old_lay['legend'] = {
                'x': reData['legend.x'],
                'y': reData['legend.y']
            }
            return old_lay
        else:
            raise PreventUpdate