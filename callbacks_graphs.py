from dash.dependencies import Input, Output, State

import pandas as pd
import numpy as np
import itertools
import json

import MDDClass as mc
import app_util as au


def graphs_callbacks(app):

    @app.callback(
        Output('graph_params', 'options'),
        [Input('slice_indices', 'children'),
         Input('moveaxis', 'layout')],
        [State('metadata', 'children')]
    )
    def def_graphparams(si, layout, metadata):
        meta = (
            pd.read_json(metadata, orient='split')
            .sort_values(by=['Axis'], ignore_index=True)
        )
        new_pos = [layout[i]['x'] for i in range(len(layout))]
        new_name = [meta['Name'][new_pos.index(i)] for i in range(len(new_pos))]

        new_vals = []
        indices = json.loads(si)
        for i, name in enumerate(new_name):
            vals = meta.loc[meta['Name'] == name]['Values'].array[0]
            start = indices[name][0]
            stop = indices[name][1] + 1
            vals = vals[start: stop]
            new_vals.append(vals)

        options = []
        for coord in itertools.product(*new_vals[:-1]):
            lab = ''
            ind = ''
            for i in range(len(coord)):
                lab += f'{new_name[i]}({coord[i]}) x '
                ind += f"""
                {meta.loc[meta['Name'] == new_name[i]]['Values']
                .array[0]
                .index(coord[i])},
                """
            lab += f'{new_name[-1]}'

            last = (
                meta.loc[meta['Name'] == new_name[-1]]['Values']
                .array[0]
            )
            ind += f"""
            {last.index(new_vals[-1][0])}:
            {last.index(new_vals[-1][-1]) + 1}
            """
            options.append({
                'label': lab,
                'value': ind
            })
        return options

    @app.callback(
        [Output('graphs', 'children'),
         Output('graphs', 'layout'),
         Output('graphs', 'maxrows')],
        [Input('graph_params', 'value'),
         Input('mdd', 'children')],
        [State('moveaxis', 'layout')]
    )
    def create_graphs(vals, mdd_json, layout):
        mdd = mc.read_json_pair(mdd_json)
        new_pos = [layout[i]['x'] + 1 for i in range(len(layout))]

        items = []
        for i in range(len(vals)):
            val = vals[i].split(',')
            sing_vals = [int(j) for j in val[:-1]]
            last_vals = [int(j) for j in val[-1].split(':')]

            items.append(
                au.line_graph(mdd, new_pos, sing_vals, last_vals)
            )

        nrows = len(vals) // 3 + 1
        ncolumns = 3
        if len(vals) % 3 == 0:
            nrows = len(vals) // 3
        if len(vals) // 3 == 0:
            ncolumns = len(vals) % 3
        print('#############')
        children, layout = au.define_draggrid(nrows, ncolumns, items, {'borderStyle': 'solid'})
        print(children)
        print(layout)
        print(nrows)
        return children, layout, nrows








