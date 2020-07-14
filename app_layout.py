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
        dcc.ConfirmDialog(
            id='fit_error'
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
                                        id='add_data_button',
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
                html.Hr(className='five columns')
            ],
            className='one row'
        ),

        #graphs
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
                    width=1200,
                    compacttype='vertical'
                ),
                html.Div(id='graphdata', children=[]),
                html.Div(id='graphstyle', children=[])
            ],
            className='eight columns',
            style={
                'marginLeft': 0,
                'height': 900,
                'overflowY': 'scroll',
                'border': '5px double #7B440B',
                'borderRadius': 10,
                'backgroundColor': '#F1F3F3'
            }
        ),
        html.Div(
            children=[
                html.Div(
                    children=[
                        html.Pre(
                            'Select Graphs',
                            style={
                                'marginLeft': 15,
                                'borderBottom': '1px solid #50C878',
                                'textAlign': 'center',
                                'fontSize': 14
                            }
                        ),
                        dcc.Loading(
                            dcc.Dropdown(
                                id='graph_params',
                                style={
                                    'width': 550,
                                    'marginTop': 5,
                                    'marginLeft': 5
                                },
                                multi=True
                            ),
                            id='graph_params_loading',
                            type='default'
                        ),
                        dcc.Store(id='prev_val', data={}),
                        dcc.Store(id='lastslice'),
                        html.Pre(
                            'Slice Axis',
                            style={
                                'marginTop': 20,
                                'marginLeft': 15,
                                'borderBottom': '1px solid #50C878',
                                'textAlign': 'center',
                                'fontSize': 14
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
                                'marginTop': 5,
                                'marginLeft': 10,
                                'width': 550,
                                'overflowX': 'scroll'
                            }
                        ),
                        html.Div(
                            children=[
                                html.Pre(id='slice_validation'),
                                dcc.Store(id='slice_indices')
                            ]
                        ),
                        html.Pre(
                            'Move Axis',
                            style={
                                'marginTop': 20,
                                'marginLeft': 15,
                                'borderBottom': '1px solid #50C878',
                                'textAlign': 'center',
                                'fontSize': 14
                            }
                        ),
                        # Grid to move axis
                        html.Div(
                            dg.DragGrid(
                                id='moveaxis',
                                label='label',
                                width=550
                            ),
                            style={
                                'backgroundColor': '#607D8B',
                                'borderTop': '5px solid #2DC7D8',
                                'borderRadius': '10px',
                                'marginTop': 5,
                                'marginLeft': 10,
                                'marginBottom': 20,
                                'width': 550
                            }
                        )
                    ],
                    style={
                        'borderTop': '40px solid #50C878',
                        'borderRadius': '25px',
                        'backgroundColor': '#FFFDD0',
                        'borderBottom': '1px solid',
                        'height': 400,
                        'overflowY': 'scroll',
                        'overflowX': 'hidden'
                    }
                ),
                dcc.Tabs(
                    children=[
                        # Style Tab
                        dcc.Tab(
                            html.Div(
                                children=[
                                    html.Pre(
                                        'Title',
                                        style={
                                            'fontSize': 16,
                                            'textAlign': 'center'
                                        }
                                    ),
                                    dcc.Input(
                                        id='graphtitles',
                                        value='',
                                        style={
                                            'display': 'block',
                                            'marginLeft': 'auto',
                                            'marginRight': 'auto'
                                        }
                                    ),
                                    html.Pre(
                                        'x-title',
                                        style={
                                            'fontSize': 16,
                                            'textAlign': 'center'
                                        }
                                    ),
                                    dcc.Input(
                                        id='xaxistitles',
                                        value='',
                                        style={
                                            'display': 'block',
                                            'marginLeft': 'auto',
                                            'marginRight': 'auto'
                                        }
                                    ),
                                    html.Pre(
                                        'y-title',
                                        style={
                                            'fontSize': 16,
                                            'textAlign': 'center'
                                        }
                                    ),
                                    dcc.Input(
                                        id='yaxistitles',
                                        value='',
                                        style={
                                            'display': 'block',
                                            'marginLeft': 'auto',
                                            'marginRight': 'auto'
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
                                            'marginTop': 30,
                                            'textAlign': 'center'
                                        }
                                    )
                                ],
                                style={
                                    'backgroundColor': '#FFFDD0',
                                    'height': 300,
                                    'borderTop': '25px solid #FFFDD0',
                                    'borderBottom': '1px solid',
                                    'borderBottomLeftRadius': 15,
                                    'borderBottomRightRadius': 15
                                }
                            ),
                            id='style_tab',
                            label='Style',
                            style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#607D8B',
                                'borderBottom': '5px solid #FFFDD0',
                                'color': 'white'
                            },
                            selected_style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#50C878',
                                'borderTop': '2px solid #607D8B',
                                'borderBottom': '1px solid #607D8B'
                            }
                        ),

                        # Deriv Tab
                        dcc.Tab(
                            html.Div(
                                children=[
                                    dcc.Dropdown(
                                        id='deriv_dropdown',
                                        style={
                                            'marginLeft': 5,
                                            'width': 400,
                                            'display': 'inline-block',
                                            'verticalAlign': 'top'
                                        }
                                    ),
                                    html.Button(
                                        'Confirm',
                                        id='deriv_confirm',
                                        style={
                                            'marginLeft': 10,
                                            'display': 'inline-block',
                                            'verticalAlign': 'top'
                                        }
                                    ),
                                    html.Div(
                                        children=[
                                            html.Div(
                                                '',
                                                id='deriv_tracker',
                                                style={
                                                    'fontWeight': 'bold',
                                                    'backgroundColor': '#50C878',
                                                    'borderRight': '5px solid #2DC7D8',
                                                    'borderLeft': '5px solid #2DC7D8',
                                                    'borderRadius': '10px',
                                                    'marginTop': 25,
                                                    'marginRight': 20,
                                                    'display': 'inline-block'
                                                }
                                            ),
                                            dcc.Store(id='deriv_params', data=''),
                                            html.Button(
                                                'clear',
                                                id='deriv_clear',
                                                style={
                                                    'marginTop': 25,
                                                    'marginRight': 50,
                                                    'display': 'inline-block'
                                                }
                                            )
                                        ],
                                        style={'textAlign': 'right'}
                                    ),
                                    dcc.Checklist(
                                        id='derivmodes',
                                        options=[
                                            {'label': 'Show Lines', 'value': 'lines'},
                                            {'label': 'Show Markers', 'value': 'markers'}
                                        ],
                                        value=['lines', 'markers'],
                                        labelStyle={'display': 'inline-block'},
                                        style={
                                            'marginTop': 30,
                                            'textAlign': 'center'
                                        }
                                    )
                                ],
                                style={
                                    'backgroundColor': '#FFFDD0',
                                    'height': 300,
                                    'borderTop': '25px solid #FFFDD0',
                                    'borderBottom': '1px solid',
                                    'borderBottomLeftRadius': 15,
                                    'borderBottomRightRadius': 15
                                }
                            ),
                            id='deriv_tab',
                            label='Derivative',
                            style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#607D8B',
                                'borderBottom': '5px solid #FFFDD0',
                                'color': 'white'
                            },
                            selected_style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#50C878',
                                'borderTop': '2px solid #607D8B',
                                'borderBottom': '1px solid #607D8B'
                            }
                        ),
                        dcc.Tab(
                            html.Div(
                                id='fit_div',
                                children=[
                                    dcc.Dropdown(
                                        id='fit_dropdown',
                                        options=[
                                            {'label': 'Linear', 'value': 'linear'},
                                            {'label': 'Polynomial', 'value': 'polynomial'},
                                            {'label': 'Exponential', 'value': 'exponential'}
                                        ]
                                    ),
                                    html.Pre(
                                        id='show_func'
                                    ),
                                    html.Div(
                                        id='fit_params',
                                        style={'marginLeft': 10}
                                    ),
                                    dcc.Store(
                                        id='fit_iguess'
                                    ),
                                    html.Button(
                                        'Confirm',
                                        id='fit_confirm',
                                        style={
                                            'marginLeft': 10,
                                            'marginTop': 10
                                        }
                                    ),
                                    dcc.Checklist(
                                        id='fitmodes',
                                        options=[
                                            {'label': 'Show Lines', 'value': 'lines'},
                                            {'label': 'Show Markers', 'value': 'markers'},
                                            {'label': 'Show Fit Parameters', 'value': 'params'}
                                        ],
                                        value=['lines', 'markers', 'params'],
                                        labelStyle={'display': 'inline-block'},
                                        style={
                                            'marginTop': 30,
                                            'textAlign': 'center'
                                        }
                                    ),
                                    dcc.RadioItems(
                                        id='fitdata',
                                        options=[
                                            {'label': 'Raw Data', 'value': 'raw'},
                                            {'label': 'Derivative', 'value': 'deriv'}
                                        ],
                                        value='raw',
                                        labelStyle={'display': 'inline-block'},
                                        style={
                                            'marginTop': 30,
                                            'textAlign': 'center'
                                        }
                                    )
                                ],
                                style={
                                    'backgroundColor': '#FFFDD0',
                                    'height': 300,
                                    'borderTop': '25px solid #FFFDD0',
                                    'borderBottom': '1px solid',
                                    'borderBottomLeftRadius': 15,
                                    'borderBottomRightRadius': 15
                                }
                            ),
                            id='fit_tab',
                            label='Function Fit',
                            style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#607D8B',
                                'borderBottom': '5px solid #FFFDD0',
                                'color': 'white'
                            },
                            selected_style={
                                'borderTopLeftRadius': 15,
                                'borderTopRightRadius': 15,
                                'backgroundColor': '#50C878',
                                'borderTop': '2px solid #607D8B',
                                'borderBottom': '1px solid #607D8B'
                            }
                        )
                    ],
                    style={
                        'marginTop': 50
                    }
                )
            ],
            className='four columns'
        ),
        # # TESTING MDD, DELETE LATER
        # html.Button(
        #     'CHECK',
        #     id='checkbutton'
        # ),
        # html.Div(id='check', style={'display': 'none'}),

        # # hidden divs --> move to more appropriate locations later
        # html.Div(id='dummy', style={'display': 'none'}),
        # # html.Div(id='metadata', style={'display': 'none'}),
        # # html.Div(id='mdd', style={'display': 'none'}),
        # # html.Div(id='mddcopy', style={'display': 'none'}),
        # # html.Div(id='lastslice', style={'display': 'none'})
    ])
