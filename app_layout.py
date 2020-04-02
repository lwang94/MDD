import dash
import dash_table as dt
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State

import pandas as pd
import math as math
import numpy as np


def app_layout():
    return html.Div([
        # Title
        html.H1(
            children='A3MD',
            style={'textAlign': 'center'}
        ),
        html.Div(
            children=[
                html.Div(
                    children=[
                        dt.DataTable(
                            id='metadata_table',
                            columns=[
                                {'name': 'Dimension', 'id': 'Dimension', 'type': 'numeric'},
                                {'name': 'Name', 'id': 'Name'},
                                {'name': 'Num Values', 'id': 'Num Values', 'type': 'numeric'},
                                {'name': 'Method', 'id': 'Method', 'presentation': 'dropdown'} # give it a better name
                            ],
                            data=[
                                {
                                    'Dimension': math.nan,
                                    'Name': '',
                                    'Num Values': 0,
                                    'Method': 'Upload'
                                }
                                for i in range(3)
                            ],
                            dropdown={
                                'Method': {
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
                            id='confirm_axis',
                            n_clicks=0,
                            style={'marginBottom': 18}
                        ),
                        html.Div(
                            id='axis_methods'
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
                            id='axis_inputs'
                        )
                    ],
                    className='one third columns'
                ),
                html.Div(
                    children=[
                        html.Hr(style={'marginBottom': 30}),
                        html.Div(
                            id='axis_graduated_bars'
                        )
                    ],
                    className='four twothirds columns',
                    style={'align': 'left'}
                )
            ],
            className='one row'
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
                    id='add_values',
                    children=html.Button(
                        'Add Values',
                        style={'width': 130, 'marginLeft': 40}
                    ),
                    multiple=True,
                    className='one column'
                ),
                dcc.Input(
                    id='value_header',
                    placeholder='Header1, Header2,...',
                    type='text',
                    style={'width': 130, 'marginLeft': 85},
                    className='one column'
                ),
                html.Pre(
                        'WARNING: Leaving this field blank adds ALL the columns in the .csv file',
                        style={'textAlign': 'left', 'marginLeft': 20, 'color': '#d40000'},
                        className='four columns'
                )
            ],
            className='one row'
        ),

        html.Div(id='metadata', style={'display': 'none'}),
        html.Div(id='mddata', style={'display': 'none'}),
        html.Div(id='mddata_copy', style={'display': 'none'}),
    ])