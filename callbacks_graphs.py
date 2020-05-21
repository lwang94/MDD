from dash.dependencies import Input, Output, State

import pandas as pd
import numpy as np
import itertools
import json

import MDDClass as mc
import app_util as au


def graphs_callbacks(app):

    @app.callback(
        [Output('graph_params', 'options'),
         Output('graph_params', 'value'),
         Output('lastslice', 'children')],
        [Input('slice_indices', 'children'),
         Input('moveaxis', 'layout')],
        [State('metadata', 'children'),
         State('graph_params', 'value')]
    )
    def def_graphparams(si, layout, metadata, val_state):
        meta = (
            pd.read_json(metadata, orient='split')
            .sort_values(by=['Axis'], ignore_index=True)
        )
        new_x = [layout[i]['x'] for i in range(len(layout))]
        new_y = [layout[i]['y'] for i in range(len(layout))]
        new_pos = [new_x[i] + new_y[i] * (max(new_x) + 1) for i in range(len(new_x))]
        new_name = [meta['Name'][new_pos.index(i)] for i in range(len(new_pos))]

        new_vals = []
        indices = json.loads(si)
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

        options = []
        value = []
        for coord in itertools.product(*new_vals[:-1]):
            lab = ''
            ind = ''
            for i in range(len(coord)):
                lab += f'{new_name[i]}({coord[i]}) x '
                ind += str(
                    meta.loc[meta['Name'] == new_name[i]]['Values']
                    .array[0]
                    .index(coord[i])
                ) + ','
            lab += f'{new_name[-1]}'
            if ind[:-1] in val_set:
                value.append(ind[:-1])
            options.append({
                'label': lab,
                'value': ind[:-1]
            })

        # if len(value) == 0:
        #     value = None

        last = (
            meta.loc[meta['Name'] == new_name[-1]]['Values']
            .array[0]
        )
        lastslice = (
            str(last.index(new_vals[-1][0]))
            + ':'
            + str(last.index(new_vals[-1][-1]) + 1)
        )

        return options, value, lastslice

    @app.callback(
        [Output('graphs', 'children'),
         Output('graphs', 'layout'),
         Output('graphs', 'divstyle'),
         Output('graphs', 'maxrows'),
         Output('graphs', 'numcolumns')],
        [Input('graph_params', 'value'),
         Input('mdd', 'children'),
         Input('lastslice', 'children')],
        [State('moveaxis', 'layout')]
    )
    def create_graphs(vals, mdd_json, lastslice, layout):
        mdd = mc.read_json_pair(mdd_json)

        new_x = [layout[i]['x'] for i in range(len(layout))]
        new_y = [layout[i]['y'] for i in range(len(layout))]
        new_pos = [1 + new_x[i] + new_y[i] * (max(new_x) + 1) for i in range(len(new_x))]
        mdd.move_axis(new_pos)

        keys=[]
        items = []
        for i in range(len(vals)):
            keys.append(vals[i])

            val = vals[i].split(',')
            sing_vals = [int(j) for j in val]
            last_vals = [int(j) for j in lastslice.split(':')]

            items.append(
                au.line_graph(mdd, sing_vals, last_vals)
            )

        if len(items) == 0:
            raise ValueError('No items found')

        spacing = 10
        nrows = (len(vals) // 3 + 1) * spacing
        ncolumns = 3 * spacing
        if len(vals) % 3 == 0:
            nrows = (len(vals) // 3) * spacing
        if len(vals) // 3 == 0:
            ncolumns = (len(vals) % 3) * spacing

        children, layout = au.define_draggrid(
            nrows//spacing,
            ncolumns//spacing,
            items,
            keys,
            w=spacing,
            h=spacing,
            spacex=spacing,
            spacey=spacing
        )
        divstyle = {
            'borderStyle': 'solid'
        }

        return children, layout, divstyle, nrows, ncolumns








