import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH

import bisect
import json
import pandas as pd

import MDDClass as mc
import app_util as au


def mdd_callbacks(app):

    @app.callback(
        [Output('start_valueslice', 'children'),
         Output('stop_valueslice', 'children'),
         Output('slider_valueslice', 'children')],
        [Input('metadata', 'children')]
    )
    def valueslice_inputs(data):
        data = pd.read_json(data, orient='split').to_dict('records')
        start_valueslice_widg = []
        stop_valueslice_widg = []
        slider_valueslice_widg = []
        for i, row in enumerate(data):
            start_valueslice = dcc.Input(
                id={'type': 'start', 'index': i},
                type='text',
                value=row['Values'][0],
                style={
                    # 'backgroundColor': 'transparent',
                    'marginBottom': 12,
                    'width': 50
                }
            )

            stop_valueslice = dcc.Input(
                id={'type': 'stop', 'index': i},
                type='text',
                value=row['Values'][-1],
                style={
                    # 'backgroundColor': 'transparent',
                    'marginBottom': 12,
                    'width': 50
                }
            )


            slider_valueslice = html.Div(
                dcc.RangeSlider(
                    id={'type': 'slider', 'index': i},
                    min=row['Values'][0],
                    max=row['Values'][-1],
                    marks={j: '' for j in row['Values']},
                    step=None,
                    value=[row['Values'][0], row['Values'][-1]]
                ),
                style={
                    'marginBottom': 11
                }
            )

            start_valueslice_widg.append(start_valueslice)
            stop_valueslice_widg.append(stop_valueslice)
            slider_valueslice_widg.append(slider_valueslice)
        return start_valueslice_widg, stop_valueslice_widg, slider_valueslice_widg

    @app.callback(
        Output({'type': 'slider', 'index': MATCH}, 'value'),
        [Input({'type': 'start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'start', 'index': MATCH}, 'value'),
         State({'type': 'stop', 'index': MATCH}, 'value')]
    )
    def update_slider(nstart, nstop, start, stop):
        if nstart is not None or nstop is not None:
            value = [float(start), float(stop)]
            return value

    @app.callback(
        [Output({'type': 'start', 'index': MATCH}, 'value'),
         Output({'type': 'stop', 'index': MATCH}, 'value')],
        [Input({'type': 'slider', 'index': MATCH}, 'value')]
    )
    def update_startstop(sliderval):
        return sliderval[0], sliderval[1]


    # Create and add data to mdd
    @app.callback(
        Output('mdd', 'children'),
        [Input('metadata', 'children'),
         Input('add_data', 'contents')], # CAN'T REUPLOAD SAME FILES (GOOGLE FOR DEBUG SOLUTION LATER)
        [State('mdd', 'children'),
         State('start_valueslice', 'children'),
         State('stop_valueslice', 'children'),
         State('data_headers', 'value')]
    )
    def create_mdd(
        metadata, add_data,
        mdd_state, start_valueslice, stop_valueslice,
        data_headers
    ):
        meta = pd.read_json(metadata, orient='split')
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'metadata.children':
            mdd = mc.MDD(meta)
            return mc.to_json_pair(mdd)
        else:
            mdd = mc.read_json_pair(mdd_state)

            headers = data_headers.split(',')
            data = au.load_data(add_data, usecols=headers)

            indices = {}
            for i in range(len(start_valueslice)):
                ax = meta['Axis'][i]
                start = start_valueslice[i]['props']['value']
                stop = stop_valueslice[i]['props']['value']

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
        Output('moveaxis', 'divstyle'),
        Output('moveaxis', 'maxrows'),
        Output('moveaxis', 'numcolumns')],
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
        keys = [f'axis_{i}' for i in range(len(meta))]

        nrows = len(meta) // 6 + 1
        ncolumns = 6
        if len(meta) % 6 == 0:
            nrows = len(meta) // 6
        if len(meta) // 6 == 0:
            ncolumns = len(meta) % 6

        layout = au.define_draggrid(
            nrows,
            ncolumns,
            keys,
            isResizable=False
        )

        return items, layout, divstyle, nrows, ncolumns


    # TESTING MDD, DELETE LATER
    @app.callback(
        Output('check', 'children'),
        [Input('checkbutton', 'n_clicks')],
        [State('mdd', 'children')]
    )
    def check(button, mddstate):
        if button > 0:
            mdd = mc.read_json_pair(mddstate)
            mdd.create_training()
            mdd.generate_features()
            print(mdd.training)