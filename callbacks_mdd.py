import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State

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
        [Output('graphslice_table', 'data'),
        Output('graphslice_table', 'dropdown')],
        [Input('metadata', 'children'),
        Input('graphslice_table', 'data_timestamp')],
        [State('graphslice_table', 'data'),
        State('graphslice_table', 'active_cell')]
    )
    def update_gs_table(metadata, dtime, datastate, activecell):
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'metadata.children':
            datalist = []
            meta = pd.read_json(metadata, orient='split').to_dict('records')
            for row in meta:
                print(row)
                data = {
                    'gName': row['Name'],
                    'gAxis': row['Axis'],
                    'gStart': row['Values'][0],
                    'gStop': row['Values'][-1]
                }
                datalist.append(data)

            dropdown = {
                'gAxis': {
                    'options': [
                        {'label': str(i + 1), 'value': i + 1}
                        for i in range(len(meta))
                    ]
                }
            }
            return datalist, dropdown
        else:
            print(activecell)



# def create_mdd(metadata):
#     meta = pd.read_json(metadata, orient='split')
#     mdd = mc.MDD(meta)
#     return mc.to_json_pair(mdd)


# def add_data(mdd_state, add_value, valueslice, value_header):
#     mdd = mc.read_json_pair(mdd_state)

#     headers = value_header.split(',')
#     values = au.load_data(add_value, usecols=headers)

#     indices = {}
#     for widget in valueslice:
#         dim = int(
#             au.get_axis_info(
#                 widget,
#                 keys='pc'
#             )
#             [0]['props']['id']
#             .split('_')[0]
#         )
#         start = float(
#             au.get_axis_info(
#                 widget,
#                 keys='pc'
#             )
#             [0]['props']['value']
#         )
#         stop = float(
#             au.get_axis_info(
#                 widget,
#                 keys='pc'
#             )
#             [1]['props']['value']
#         )
#         indices[dim] = (start, stop)
#     mdd.add_values(values, indices)
#     return mc.to_json_pair(mdd)