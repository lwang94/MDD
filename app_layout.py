import dash_table as dt
import dash_core_components as dcc
import dash_html_components as html
import drag_grid as dg

import math as math

import config as cf


def app_layout():
    return html.Div([
        # Title
        html.H1(
            children='A3MD',
            style={'textAlign': 'center'}
        ),

        # Error Messages
        dcc.ConfirmDialog(
            id='error_message'
        ),

        # First Row
        html.Div(
            children=[
                html.Div(
                    children=[
                        # Metadata DataTable
                        html.Div(
                            children=[
                                dt.DataTable(
                                    id='metadata_table',
                                    columns=[
                                        {
                                            'name': 'Axis',
                                            'id': 'Axis',
                                            'type': 'numeric'
                                        },
                                        {
                                            'name': 'Name',
                                            'id': 'Name'
                                        },
                                        {
                                            'name': 'Num Values',
                                            'id': 'Num Values',
                                            'type': 'numeric'
                                        },
                                        {
                                            'name': 'Define Values',
                                            'id': 'Define Values',
                                            'presentation': 'dropdown'
                                        }
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
                                    style_header={
                                        'backgroundColor': '#50C878',
                                        'fontWeight': 'bold',
                                        'border': '1px solid',
                                        'textAlign': 'center'
                                    },
                                    style_cell={
                                        'height': '50px',
                                        'backgroundColor': 'transparent',
                                        'border': '1px solid',
                                        'textAlign': 'center'
                                    }
                                )
                            ],
                            className='eight columns',
                            style={
                                'marginTop': 50,
                                'marginLeft': 30
                            }
                        ),

                        # Column for methods of defining values
                        html.Div(
                            children=[
                                html.Button(
                                    'Confirm',
                                    id='confirm_values',
                                    n_clicks=0,
                                    style={
                                        'backgroundColor': '#50C878',
                                        'borderLeft': '15px solid #607D8B',
                                        'marginBottom': 18
                                    }
                                ),
                                html.Div(
                                    id='defval_methods',
                                    children=[]
                                )
                            ],
                            className='four columns',
                            style={
                                'textAlign': 'center',
                                'marginTop': 50,
                                'marginLeft': 5
                            }
                        )
                    ],
                    className='six columns',
                    style={
                        'borderTop': '40px solid #50C878',
                        'borderRadius': '25px',
                        'backgroundColor': '#FFFDD0',
                        'borderBottom': '1px solid'
                    }
                ),

                html.Div(
                    children=[
                        # Columns for slicing values when uploading data
                        html.Div(
                            children=[
                                html.Pre(
                                    'Start',
                                    style={
                                        'fontSize': 16,
                                        'fontWeight': 'bold',
                                        'marginTop': 5,
                                        'marginBottom': 26
                                    }
                                ),
                                html.Div(
                                    id='start_valueslice'
                                )
                            ],
                            className='one column',
                            style={
                                'marginTop': 50,
                                'marginLeft': 20,
                                'textAlign': 'right'
                            }
                        ),

                        # Progress bars showing number of values in axis
                        html.Div(
                            children=[
                                html.Hr(style={'marginBottom': 30}),
                                html.Div(
                                    id='slider_valueslice'
                                )
                            ],
                            className='eight columns',
                            style={
                                'align': 'left',
                                'marginTop': 50,
                                'marginLeft': 5
                            }
                        ),

                        html.Div(
                            children=[
                                html.Pre(
                                    'Stop',
                                    style={
                                        'fontSize': 16,
                                        'fontWeight': 'bold',
                                        'marginTop': 5,
                                        'marginBottom': 26
                                    }
                                ),
                                html.Div(
                                    id='stop_valueslice'
                                )
                            ],
                            className='one column',
                            style={'marginTop': 50, 'marginLeft': 5}
                        ),
                        html.Div(
                            children=[
                                # Button to upload data to MDD
                                dcc.Upload(
                                    id='add_data',
                                    children=html.Button(
                                        'Add Data',
                                        style={
                                            'backgroundColor': '#50C878',
                                            'borderLeft': '15px solid #607D8B',
                                            'marginBottom': 18
                                        }
                                    ),
                                    multiple=True,
                                ),

                                # Input allowing app to to find correct column in datafile
                                dcc.Input(
                                    id='data_headers',
                                    placeholder='Header1, Header2,...',
                                    type='text',
                                    style={'width': 130},
                                    # className='one column'
                                ),
                                # html.Pre(
                                #         cf.warning_dataheader,
                                #         style={
                                #             'textAlign': 'left',
                                #             'marginLeft': 20,
                                #             'color': '#f3742b'
                                #         },
                                #         # className='four columns'
                                # )
                            ],
                            className='two columns',
                            style={'marginTop': 50}
                        )
                    ],
                    className='six columns',
                    style={
                        'borderTop': '40px solid #50C878',
                        'borderRadius': '25px',
                        'backgroundColor': '#FFFDD0',
                        'borderBottom': '1px solid'
                    }
                ),
            ],
            className='one row',
            style={
                'height': 300,
                'overflowY': 'scroll'
            }
            # style={
            #     'borderTop': '40px solid #50C878',
            #     'borderRadius': '25px',
            #     'backgroundColor': '#FFFDD0',
            #     'borderBottom': '1px solid',
            #     'height': 300,
            #     'overflowY': 'scroll'
            # }
        ),

        # Second Row
        html.Div(
            children=[
                # Button to add row to metadata datatable
                html.Button(
                    'Add Row',
                    id='add_rows',
                    n_clicks=0,
                    style={'width': 120},
                    className='one column'
                ),
                html.Hr(className='five columns'),

                # # Button to upload data to MDD
                # dcc.Upload(
                #     id='add_data',
                #     children=html.Button(
                #         'Add Data',
                #         style={'width': 130, 'marginLeft': 40}
                #     ),
                #     multiple=True,
                #     className='one column'
                # ),

                # # Input allowing app to to find correct column in datafile
                # dcc.Input(
                #     id='data_headers',
                #     placeholder='Header1, Header2,...',
                #     type='text',
                #     style={'width': 130, 'marginLeft': 85},
                #     className='one column'
                # ),
                # html.Pre(
                #         cf.warning_dataheader,
                #         style={
                #             'textAlign': 'left',
                #             'marginLeft': 20,
                #             'color': '#f3742b'
                #         },
                #         className='four columns'
                # )
            ],
            className='one row'
        ),

        # Third Row
        html.Div(
            children=[
                html.Div(
                    children=[
                        # Grid to move axis
                        dg.DragGrid(
                            id='moveaxis',
                            label='label',
                            width=900
                        ),
                        # Dropdown showing line graph parameters
                        dcc.Dropdown(
                            id='graph_params',
                            multi=True
                        )
                    ],
                    className='six columns'
                ),
                html.Div(
                    children=[
                        # Slice value datatable (for displaying graph)
                        dt.DataTable(
                            id='slice_table',
                            editable=True,
                            style_table={'overflowX': 'scroll'}
                        ),
                        html.Div(
                            children=[
                                html.Pre(id='slice_validation'),
                                html.Div(
                                    id='slice_indices',
                                    style={'display': 'none'}
                                )
                            ]
                        )
                    ],
                    className='six columns'
                )
            ],
            className='one row'
        ),

        # Fourth Row
        html.Div(
            # Graph grid
            dg.DragGrid(
                id='graphs',
                label='label',
                rowheight=50,
                width=1800,
                compacttype='vertical'
            ),
            className='one row',
            style={'height': 900, 'overflowY': 'scroll'}
        ),

        # TESTING MDD, DELETE LATER
        html.Button(
            'CHECK',
            id='checkbutton'
        ),
        html.Div(id='check', style={'display': 'none'}),

        # hidden divs --> move to more appropriate locations later
        html.Div(id='metadata', style={'display': 'none'}),
        html.Div(id='mdd', style={'display': 'none'}),
        html.Div(id='mddcopy', style={'display': 'none'}),
        html.Div(id='lastslice', style={'display': 'none'})
    ])
