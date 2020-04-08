import dash_table as dt
import dash_core_components as dcc
import dash_html_components as html

import math as math

import config as cf


def app_layout():
    return html.Div([
        # Title
        html.H1(
            children='A3MD',
            style={'textAlign': 'center'}
        ),

        dcc.ConfirmDialog(
            id='error_message'
        ),

        html.Div(
            children=[
                html.Div(
                    children=[
                        dt.DataTable( # set max height and vertical scrolling after determining optimal size
                            id='metadata_table',
                            columns=[
                                {'name': 'Axis', 'id': 'Axis', 'type': 'numeric'},
                                {'name': 'Name', 'id': 'Name'},
                                {'name': 'Num Values', 'id': 'Num Values', 'type': 'numeric'},
                                {'name': 'Define Values', 'id': 'Define Values', 'presentation': 'dropdown'}
                            ],
                            data=[
                                {
                                    'Axis': math.nan,
                                    'Name': '',
                                    'Num Values': 0,
                                    'Define Values': 'Upload'
                                }
                                for i in range(3)
                            ],
                            dropdown={
                                'Define Values': {
                                    'options': [
                                        {'label': 'Upload', 'value': 'Upload'},
                                        {'label': 'Range', 'value': 'Range'},
                                        {'label': 'Custom', 'value': 'Custom'}
                                    ]
                                }
                            },
                            editable=True,
                            row_deletable=True,
                            style_cell={'height': '50px'}
                        )
                    ],
                    className='five columns'
                ),
                html.Div(
                    children=[
                        html.Button(
                            'Confirm',
                            id='confirm_values',
                            n_clicks=0,
                            style={'marginBottom': 18}
                        ),
                        html.Div(
                            id='defval_methods'
                        )
                    ],
                    className='one column'
                ),
                html.Div(
                    children=[
                        html.Pre(
                            'Start   Stop',
                            style={
                                'fontSize': 16,
                                'marginTop': 5,
                                'marginBottom': 26}
                        ),
                        html.Div(
                            id='valueslice'
                        )
                    ],
                    className='one third columns'
                ),
                html.Div(
                    children=[
                        html.Hr(style={'marginBottom': 30}),
                        html.Div(
                            id='show_valueslice'
                        )
                    ],
                    className='four twothirds columns',
                    style={'align': 'left'}
                )
            ],
            className='one row',
            style={'borderStyle': 'solid'}
        ),
        html.Div(
            children=[
                html.Button(
                    'Add Row',
                    id='add_rows',
                    n_clicks=0,
                    style={'width': 120},
                    className='one column'
                ),
                html.Hr(className='five columns'),
                dcc.Upload(
                    id='add_data',
                    children=html.Button(
                        'Add Data',
                        style={'width': 130, 'marginLeft': 40}
                    ),
                    multiple=True,
                    className='one column'
                ),
                dcc.Input(
                    id='data_headers',
                    placeholder='Header1, Header2,...',
                    type='text',
                    style={'width': 130, 'marginLeft': 85},
                    className='one column'
                ),
                html.Pre(
                        cf.warning_dataheader,
                        style={'textAlign': 'left', 'marginLeft': 20, 'color': '#d40000'},
                        className='four columns'
                )
            ],
            className='one row'
        ),
        html.Div(
            children=[
                dcc.Graph(
                    id='tempgraph',
                    className='six columns',
                    style={'borderStyle': 'solid'}
                ),
                html.Div(
                    children=[
                        html.Div(
                            dt.DataTable( # set max height and vertical scrolling after determining optimal size
                                id='graphslice_table',
                                columns=[
                                    {'name': 'Name', 'id': 'gName', 'type': 'text', 'editable': False},
                                    {'name': 'Axis', 'id': 'gAxis', 'type': 'numeric', 'presentation': 'dropdown'},
                                    {'name': 'Start', 'id': 'gStart', 'type': 'numeric', 'presentation': 'dropdown'},
                                    {'name': 'Stop', 'id': 'gStop', 'type': 'numeric', 'presentation': 'dropdown'}
                                ],
                                editable=True
                            ),
                            style={'borderStyle': 'solid'}
                        ),
                    ],
                    className='six columns'
                )
            ],
            className='one row'
        ),


        html.Div(id='metadata', style={'display': 'none'}),
        html.Div(id='mdd', style={'display': 'none'}),
        html.Div(id='mddcopy', style={'display': 'none'}),
    ])