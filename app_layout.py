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
                        ),
                        dcc.Store(id='metadata')
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
                                    style={
                                        'width': 130,
                                        'marginBottom': 18
                                    }
                                ),
                                html.A(
                                    html.Button(
                                        'Save MDD',
                                        style={
                                            'backgroundColor': '#607D8B',
                                            'color': 'white',
                                            'marginBottom': 18
                                        }
                                    ),
                                    id='save_data'
                                ),

                                # html.Pre(
                                #         cf.warning_dataheader,
                                #         style={
                                #             'textAlign': 'left',
                                #             'marginLeft': 20,
                                #             'color': '#f3742b'
                                #         },
                                #         # className='four columns'
                                # ),
                                dcc.Store(id='mdd'),
                                dcc.Store(id='mddcopy')
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
                dcc.Input(
                    id='ind_var',
                    value=''
                ),
                html.Hr(className='five columns')
            ],
            className='one row'
        ),

        # Third Row
        html.Div(
            children=[
                html.Div(
                    children=[
                        html.Div(
                            children=[
                                html.Pre(
                                    'Move Axis',
                                    style={
                                        'width': 100,
                                        'borderTop': '1px solid #50C878',
                                        'borderBottom': '1px solid #50C878',
                                        'borderLeft': '10px solid #50C878',
                                        'borderRight': '10px solid #50C878',
                                        'marginLeft': 50,
                                        'marginTop': 30,
                                        'textAlign': 'center',
                                        'fontSize': 18
                                    }
                                ),
                                # Grid to move axis
                                html.Div(
                                    dg.DragGrid(
                                        id='moveaxis',
                                        label='label',
                                        width=500
                                    ),
                                    style={
                                        'backgroundColor': '#50C878',
                                        'borderTop': '5px solid #2DC7D8',
                                        'borderRadius': '10px',
                                        'marginLeft': 50,
                                        'marginTop': 10
                                    }
                                )
                            ],
                            className='four columns'
                        ),
                        html.Div(
                            children=[
                                # Slice value datatable (for displaying graph)
                                html.Pre(
                                    'Slice Axis',
                                    style={
                                        'width': 150,
                                        'borderTop': '1px solid #50C878',
                                        'borderBottom': '1px solid #50C878',
                                        'borderLeft': '10px solid #50C878',
                                        'borderRight': '10px solid #50C878',
                                        'marginTop': 30,
                                        'textAlign': 'center',
                                        'fontSize': 18
                                    }
                                ),
                                dt.DataTable(
                                    id='slice_table',
                                    editable=True,
                                    style_header={
                                        'backgroundColor': '#50C878',
                                        'fontWeight': 'bold',
                                        'border': '1px solid',
                                        'textAlign': 'center'
                                    },
                                    style_cell={
                                        'backgroundColor': 'transparent',
                                        'border': '1px solid',
                                        'textAlign': 'center'
                                    },
                                    style_table={
                                        'marginTop': 10,
                                        'width': 550,
                                        'overflowX': 'scroll'
                                    }
                                ),
                                html.Div(
                                    children=[
                                        html.Pre(id='slice_validation'),
                                        dcc.Store(id='slice_indices')
                                    ]
                                )
                            ],
                            className='four columns'
                        ),
                        html.Div(
                            children=[
                            # Dropdown showing line graph parameters
                                html.Pre(
                                    'Select Graphs',
                                    style={
                                        'width': 150,
                                        'borderTop': '1px solid #50C878',
                                        'borderBottom': '1px solid #50C878',
                                        'borderLeft': '10px solid #50C878',
                                        'borderRight': '10px solid #50C878',
                                        'marginTop': 30,
                                        'textAlign': 'center',
                                        'fontSize': 18
                                    }
                                ),
                                dcc.Loading(
                                    dcc.Dropdown(
                                        id='graph_params',
                                        style={
                                            'width': 550,
                                            'marginTop': 10
                                        },
                                        multi=True
                                    ),
                                    id='graph_params_loading',
                                    type='default'
                                ),
                                dcc.Store(id='prev_val', data={}),
                                dcc.Store(id='lastslice')
                            ],
                            className='four columns'
                        )
                    ],
                    className='one row'
                ),
                html.Div(
                    children = [
                        dcc.Tabs(
                            children=[
                                dcc.Tab(
                                    html.Div(
                                        children=[
                                            html.Pre(
                                                'Title',
                                                style={
                                                    'fontSize': 16,
                                                    'textAlign': 'center',
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            dcc.Input(
                                                id='graphtitles',
                                                value='',
                                                debounce=True,
                                                style={
                                                    'marginLeft': 5,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            html.Pre(
                                                'x-title',
                                                style={
                                                    'fontSize': 16,
                                                    'textAlign': 'center',
                                                    'marginLeft': 20,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            dcc.Input(
                                                id='xaxistitles',
                                                value='',
                                                debounce=True,
                                                style={
                                                    'marginLeft': 5,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            html.Pre(
                                                'y-title',
                                                style={
                                                    'fontSize': 16,
                                                    'textAlign': 'center',
                                                    'marginLeft': 20,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            dcc.Input(
                                                id='yaxistitles',
                                                value='',
                                                debounce=True,
                                                style={
                                                    'marginLeft': 5,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            dcc.Checklist(
                                                id='datamodes',
                                                options=[
                                                    {'label': 'Show Lines', 'value': 'lines'},
                                                    {'label': 'Show Markers', 'value': 'markers'}
                                                ],
                                                value=['lines', 'markers'],
                                                labelStyle={'display': 'inline-block'},
                                                style={
                                                    'marginLeft': 20,
                                                    'display': 'inline-block'
                                                }
                                            )
                                        ],
                                        style={
                                            'marginLeft': 50,
                                            'marginRight': 30,
                                            'backgroundColor': '#FFFFFF'
                                        }
                                    ),
                                    id='style_tab',
                                    label='Style',
                                )
                            ],
                            style={
                                'marginTop': 15,
                                'marginLeft': 50,
                                'marginRight': 30
                            }
                        ),
                        html.Div(
                            children=[
                                dg.DragGrid(
                                    id='graphs',
                                    label='label',
                                    children=[],
                                    layout=[],
                                    divstyle={'borderStyle': 'solid'},
                                    numcolumns=30,
                                    maxrows=0,
                                    rowheight=50,
                                    width=1800,
                                    compacttype='vertical'
                                ),
                                html.Div(id='graphdata', children=[]),
                                html.Div(id='graphstyle', children=[])
                            ],
                            style={'height': 900, 'overflowY': 'scroll'},
                            className='one row'
                        )
                    ],
                    className='one row',
                )
            ],
            className='one row',
            style={
                'borderTop': '40px solid #50C878',
                'borderRadius': '25px',
                'backgroundColor': '#FFFDD0'
            }
        ),

        # Fourth Row
        # html.Div(
        #     children = [
        #         dcc.Tabs([
        #             dcc.Tab(
        #                 html.Div([
        #                     html.Pre('Title'),
        #                     dcc.Input(
        #                         id='graphtitles'
        #                     )
        #                 ]),
        #                 id='style_tab',
        #                 label='Style'
        #             )
        #         ]),
        #         html.Div(
        #             dg.DragGrid(
        #                 id='graphs',
        #                 label='label',
        #                 rowheight=50,
        #                 width=1800,
        #                 compacttype='vertical'
        #             ),
        #             style={'height': 900, 'overflowY': 'scroll'},
        #             className='one row'
        #         )
        #     ],
        #     className='one row',
        # ),

        # TESTING MDD, DELETE LATER
        html.Button(
            'CHECK',
            id='checkbutton'
        ),
        html.Div(id='check', style={'display': 'none'}),

        # hidden divs --> move to more appropriate locations later
        html.Div(id='dummy', style={'display': 'none'}),
        # html.Div(id='metadata', style={'display': 'none'}),
        # html.Div(id='mdd', style={'display': 'none'}),
        # html.Div(id='mddcopy', style={'display': 'none'}),
        # html.Div(id='lastslice', style={'display': 'none'})
    ])
