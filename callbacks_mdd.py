import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State

import bisect
import json
import pandas as pd

import MDDClass as mc
import app_util as au


def mdd_callbacks(app):


    # Create widgets for inputting value slices
    @app.callback(
        Output('valueslice', 'children'),
        [Input('metadata', 'children')]
    )
    def valueslice_inputs(data):
        data = pd.read_json(data, orient='split').to_dict('records')
        valueslice_widg = []
        for i, row in enumerate(data):
            valueslice=html.Div(
                children=
                [
                    dcc.Input(
                        id=f'{data[i]["Axis"]}_start',
                        type='text',
                        value=row['Values'][0],
                        style={
                            'marginBottom': 12,
                            'marginRight': 10,
                            'width': 50
                        }
                    ),
                    dcc.Input(
                        id=f'{data[i]["Axis"]}_stop',
                        type='text',
                        value=row['Values'][-1],
                        style={
                            'marginBottom': 12,
                            'width': 50
                        }
                    )
                ],
                id=f'{i}_input'
            )
            valueslice_widg.append(valueslice)
        return valueslice_widg


    # Show Value Slice Graphically (change when plotly release wildcard Inputs)
    @app.callback(
        Output('show_valueslice', 'children'),
        [Input('metadata_table', 'data')],
        [State('show_valueslice', 'children')]
    )
    def show_vs(data, svs):
        show_vs_widg = []
        if svs is None:
            for i in range(3):
                show_vs_widg.append(
                    html.Div(
                        daq.GraduatedBar(
                            id=f'{i}_svs0',
                            max=0,
                            size=675
                        ),
                        style={'marginBottom': 20}
                    )
                )
            return show_vs_widg
        else:
            for i, row in enumerate(data):
                n_values = min(300, row['Num Values'])
                widget = html.Div(
                    daq.GraduatedBar(
                        id=f'{i}_svs{row["Num Values"]}',
                        max=n_values,
                        step=1,
                        value=n_values,
                        size=675
                    ),
                    style={'marginBottom': 20}
                )
                show_vs_widg.append(widget)
            return show_vs_widg


    # Create and add data to mdd
    @app.callback(
        Output('mdd', 'children'),
        [Input('metadata', 'children'),
        Input('add_data', 'contents')],
        [State('mdd', 'children'),
        State('valueslice', 'children'),
        State('data_headers', 'value')]
    )
    def create_mdd(
        metadata, add_data,
        mdd_state, valueslice, data_headers
    ):
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'metadata.children':
            meta = pd.read_json(metadata, orient='split')
            mdd = mc.MDD(meta)
            return mc.to_json_pair(mdd)
        else:
            mdd = mc.read_json_pair(mdd_state)

            headers = data_headers.split(',')
            data = au.load_data(add_data, usecols=headers)

            indices = {}
            for widget in valueslice:
                ax = int(
                    au.get_axis_info(
                        widget,
                        keys='pc'
                    )
                    [0]['props']['id']
                    .split('_')[0]
                )
                start = float(
                    au.get_axis_info(
                        widget,
                        keys='pc'
                    )
                    [0]['props']['value']
                )
                stop = float(
                    au.get_axis_info(
                        widget,
                        keys='pc'
                    )
                    [1]['props']['value']
                )
                indices[ax] = (start, stop)
            mdd.add_data(data, indices)
            return mc.to_json_pair(mdd)


    @app.callback(
        [Output('slice_table', 'columns'),
         Output('slice_table', 'data')],
        [Input('metadata', 'children')]
    )
    def create_slicetables(metadata):
        meta = (
            pd.read_json(metadata, orient='split')
            .sort_values(by=['Axis'], ignore_index=True)
            .to_dict('records')
        )
        columns = [
            {'name': '', 'id': 'slice', 'type': 'text', 'editable': False}
        ]
        filters = []
        for i in range(len(meta)):
            col = {'name': f'{meta[i]["Name"]}', 'id': f'slice_{meta[i]["Name"]}', 'type': 'numeric'}
            columns.append(col)



        data_start = {f'slice_{meta[i]["Name"]}': meta[i]['Values'][0] for i in range(len(meta))}
        data_start['slice'] = 'Start'

        data_stop = {f'slice_{meta[i]["Name"]}': meta[i]['Values'][-1] for i in range(len(meta))}
        data_stop['slice'] = 'Stop'

        data = [data_start, data_stop]

        return columns, data


    @app.callback(
        [Output('slice_validation', 'children'),
         Output('slice_indices', 'children'),
         Output('slice_table', 'style_data_conditional')],
        [Input('slice_table', 'data')],
        [State('metadata', 'children')]
    )
    def validate_slice(data, metadata):
        meta = (
            pd.read_json(metadata, orient='split')
            .sort_values(by=['Axis'], ignore_index=True)
        )
        message = ''
        indices = {}
        sdc = []
        for name in meta['Name']:
            valid_vals = meta.loc[meta['Name'] == name]['Values'].array[0]
            start = data[0][f'slice_{name}']
            start_ind = bisect.bisect_left(valid_vals, start)
            if start_ind >= len(valid_vals):
                start_ind = len(valid_vals) - 1

            stop = data[1][f'slice_{name}']
            stop_ind = bisect.bisect_left(valid_vals, stop)
            if stop_ind < start_ind:
                stop_ind = start_ind + 1
            if stop_ind >= len(valid_vals):
                stop_ind = len(valid_vals) - 1

            indices[f'{name}'] = [start_ind, stop_ind]
            if valid_vals[start_ind] != start:
                message += f'WARNING:{start} is an invalid start value for {name}, using {valid_vals[start_ind]} instead\n'
                sdc.append({
                    'if': {
                        'column_id': f'slice_{name}',
                        'row_index': 0
                    },
                    'backgroundColor': '#FF0000',
                    'color': 'white'
                })
            if valid_vals[stop_ind] != stop:
                message += f'WARNING: {stop} is an invalid stop value for {name}, using {valid_vals[stop_ind]} instead\n'
                sdc.append({
                    'if': {
                        'column_id': f'slice_{name}',
                        'row_index': 1
                    },
                    'backgroundColor': '#FF0000',
                    'color': 'white'
                })
        return message, json.dumps(indices), sdc





    @app.callback(
        [Output('moveaxis', 'children'),
        Output('moveaxis', 'layout'),
        Output('moveaxis', 'maxrows')],
        [Input('metadata', 'children')]
    )
    def create_moveaxis(metadata):
        meta = (
            pd.read_json(metadata, orient='split')
            .sort_values(by=['Axis'], ignore_index=True)
            .to_dict('records')
        )
        divstyle = {
            'border': '1 px solid #33DEF0',
            'backgroundColor': '#33DEF0',
            'textAlign': 'center'
        }
        items = [meta[i]['Name'] for i in range(len(meta))]

        nrows = len(meta) // 6 + 1
        ncolumns = 6
        if len(meta) % 6 == 0:
            nrows = len(meta) // 6
        if len(meta) // 6 == 0:
            ncolumns = len(meta) % 6

        children, layout = au.define_draggrid(
            nrows,
            ncolumns,
            items,
            divstyle,
            isResizable=False
        )

        return children, layout, nrows