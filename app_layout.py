import dash_core_components as dcc
import dash_html_components as html
import drag_grid as dg

from app_layouts import title_layout
from app_layouts import metadata_layout
from app_layouts import add_data_layout
from app_layouts import shift_view_layout


def app_layout(app):
    return html.Div([
        # Error Messages
        dcc.ConfirmDialog(
            id='error_message'
        ),
        # Title
        title_layout.layout_title(),

        # First Row
        html.Div(
            children=[
                dcc.Input( # inputting independent variable/label
                    id='ind_var',
                    placeholder='Ind. Var./Label',
                    debounce=True,
                    className='col-sm-1'
                ),
                metadata_layout.layout_metadata() # metadata section
            ],
            className='one row',
            style={'marginRight': '3%', 'marginLeft': '10%'}
        ),
        dcc.Store(id='metadata'), # storing mdd.metadata
        dcc.Store(id='meta_changed'), # bool: keeps track of whether MDD callback changed metadata
        dcc.Store(id='mdd'), # storing mdd.dataDF

        # Second Row
        html.Div(
            children=[
                html.Div('graphs', className='col-sm-8'),
                html.Div(
                    children=[
                        add_data_layout.layout_add_data(), # add data section
                        shift_view_layout.layout_shift_view(), # change view section
                        html.Div('Modify', className='one row')
                    ],
                    className='col-sm-4'
                )
            ],
            className='one row',
            style={'marginRight': '3%', 'marginLeft': '10%'}
        )
    ])





        #                 )
        #             ]
        #         )
        # )
        # html.Div(
        #     children=[
        #         html.Div(
        #             children=[
        #                 dcc.Input(
        #                     id='ind_var',
        #                     placeholder='Ind. Var./Label',
        #                     debounce=True
        #                 ),
        #                 dcc.Upload(
        #                     id='load_data',
        #                     children=html.Button(
        #                         'Load Data',
        #                         id='load_data_button'
        #                     )
        #                 )
        #             ],
        #             className='two columns'
        #         ),
        #         # Defining Metadata Section
        #         html.Div(
        #             children=[
        #                 html.Button('Show Metadata', id='metadata_collapse_button'),
        #                 dbc.Collapse(
        #                     children=[
        #                         metadata_layout.layout_datatable(), # Datatable
        #                         metadata_layout.layout_definevalues(), # Defining values 
        #                         dcc.Store(id='metadata')
        #                     ],
        #                     id='metadata_collapse'
        #                 )
        #             ],
        #             className='five columns',
        #             style={
        #                 'borderTop': '40px solid #50C878',
        #                 'borderRadius': '25px',
        #                 'backgroundColor': '#FFFDD0',
        #                 'borderBottom': '1px solid'
        #             }
        #         ),
    #             # Adding MDD Data Section
    #             html.Div(
    #                 children=[
    #                     mdd_layout.layout_data_start(),
    #                     mdd_layout.layout_data_slider(),
    #                     mdd_layout.layout_data_stop(),
    #                     html.Div(id='valid_values', style={'display': 'none'}),

    #                     # mdd_layout.layout_add_data(),

    #                     dcc.Loading(
    #                         dcc.Store(id='mdd'),
    #                         type='circle'
    #                     ),
    #                     dcc.Loading(
    #                         dcc.Store(id='mddcopy'),
    #                         type='circle'
    #                     ),
    #                     dcc.Store(id='metacopy')
    #                 ],
    #                 className='four columns',
    #                 style={
    #                     'borderTop': '40px solid #50C878',
    #                     'borderRadius': '25px',
    #                     'backgroundColor': '#FFFDD0',
    #                     'borderBottom': '1px solid'
    #                 }
    #             )
    #         ],
    #         className='one row',
    #         style={
    #             'height': 300,
    #             'overflowY': 'scroll'
    #         }
    #     ),

    #     # Second Row
    #     html.Div(
    #         children=[
    #             # Button to add row to metadata datatable
    #             html.Button(
    #                 'Add Row',
    #                 id='add_rows',
    #                 n_clicks=0,
    #                 style={'width': 120},
    #                 className='one column'
    #             ),
    #             html.Hr(
    #                 style={
    #                     'borderRight': '50px solid #607D8B'
    #                 },
    #                 className='six columns'
    #             )
    #         ],
    #         className='one row'
    #     ),

    #     #graphs
    #     html.Div(
    #         children=[
    #             dg.DragGrid(
    #                 id='graphs',
    #                 label='label',
    #                 children=[],
    #                 layout=[],
    #                 divstyle={
    #                     'borderStyle': '2px solid',
    #                     'borderTopLeftRadius': '10px',
    #                     'borderTopRightRadius': '10px'
    #                 },
    #                 numcolumns=30,
    #                 maxrows=0,
    #                 rowheight=50,
    #                 width=1200,
    #                 compacttype='vertical'
    #             ),
    #             html.Div(id='graphdata', children=[]),
    #             html.Div(id='graphstyle', children=[])
    #         ],
    #         className='eight columns',
    #         style={
    #             'marginLeft': 0,
    #             'height': 900,
    #             'overflowY': 'scroll',
    #             'border': '5px double #7B440B',
    #             'borderRadius': 10,
    #             'backgroundColor': '#F1F3F3'
    #         }
    #     ),
    #     html.Div(
    #         children=[
    #             html.Div(
    #                 children=[
    #                     dcc.Loading(
    #                         dcc.Dropdown(
    #                             id='graph_params',
    #                             style={
    #                                 'width': 550,
    #                                 'marginLeft': 5,
    #                                 'marginTop': 5
    #                             },
    #                             multi=True
    #                         ),
    #                         id='graph_params_loading',
    #                         type='default'
    #                     ),
    #                     dcc.Store(id='prev_val', data={}),
    #                     dcc.Store(id='lastslice'),

    #                     html.Hr(
    #                         style={
    #                             'marginTop': 10,
    #                             'marginBottom': 5
    #                         }
    #                     ),
    #                     html.Button(
    #                         'Confirm',
    #                         id='graphparam_confirm',
    #                         n_clicks=0,
    #                         style={'marginLeft': 10}
    #                     ),
    #                     # Grid to move axis
    #                     html.Div(
    #                         dg.DragGrid(
    #                             id='moveaxis',
    #                             label='label',
    #                             maxrows=1,
    #                             width=550,
    #                             margin=[10, 10],
    #                             rowheight=300
    #                         ),
    #                         style={'marginTop': 5}
    #                     )
    #                 ],
    #                 style={
    #                     'borderTop': '30px solid #50C878',
    #                     'borderRadius': '25px',
    #                     'backgroundColor': '#FFFDD0',
    #                     'borderBottom': '1px solid',
    #                     'height': 450,
    #                     # 'overflowY': 'scroll',
    #                     'overflowX': 'scroll'
    #                 }
    #             ),
    #             dcc.Tabs(
    #                 children=[
    #                     # Style Tab
    #                     dcc.Tab(
    #                         html.Div(
    #                             children=[
    #                                 html.Pre(
    #                                     'Title',
    #                                     style={
    #                                         'fontSize': 16,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 ),
    #                                 dcc.Input(
    #                                     id='graphtitles',
    #                                     value='',
    #                                     style={
    #                                         'display': 'block',
    #                                         'marginLeft': 'auto',
    #                                         'marginRight': 'auto'
    #                                     }
    #                                 ),
    #                                 html.Pre(
    #                                     'x-title',
    #                                     style={
    #                                         'fontSize': 16,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 ),
    #                                 dcc.Input(
    #                                     id='xaxistitles',
    #                                     value='',
    #                                     style={
    #                                         'display': 'block',
    #                                         'marginLeft': 'auto',
    #                                         'marginRight': 'auto'
    #                                     }
    #                                 ),
    #                                 html.Pre(
    #                                     'y-title',
    #                                     style={
    #                                         'fontSize': 16,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 ),
    #                                 dcc.Input(
    #                                     id='yaxistitles',
    #                                     value='',
    #                                     style={
    #                                         'display': 'block',
    #                                         'marginLeft': 'auto',
    #                                         'marginRight': 'auto'
    #                                     }
    #                                 ),
    #                                 dcc.Checklist(
    #                                     id='datamodes',
    #                                     options=[
    #                                         {'label': 'Show Lines', 'value': 'lines'},
    #                                         {'label': 'Show Markers', 'value': 'markers'}
    #                                     ],
    #                                     value=['lines', 'markers'],
    #                                     labelStyle={'display': 'inline-block'},
    #                                     style={
    #                                         'marginTop': 30,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 )
    #                             ],
    #                             style={
    #                                 'backgroundColor': '#FFFDD0',
    #                                 'height': 300,
    #                                 'borderTop': '25px solid #FFFDD0',
    #                                 'borderBottom': '1px solid',
    #                                 'borderBottomLeftRadius': 15,
    #                                 'borderBottomRightRadius': 15
    #                             }
    #                         ),
    #                         id='style_tab',
    #                         label='Style',
    #                         style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#607D8B',
    #                             'borderBottom': '5px solid #FFFDD0',
    #                             'color': 'white'
    #                         },
    #                         selected_style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#50C878',
    #                             'borderTop': '2px solid #607D8B',
    #                             'borderBottom': '1px solid #607D8B'
    #                         }
    #                     ),

    #                     # Deriv Tab
    #                     dcc.Tab(
    #                         html.Div(
    #                             children=[
    #                                 dcc.Dropdown(
    #                                     id='deriv_dropdown',
    #                                     style={
    #                                         'marginLeft': 5,
    #                                         'width': 400,
    #                                         'display': 'inline-block',
    #                                         'verticalAlign': 'top'
    #                                     }
    #                                 ),
    #                                 html.Button(
    #                                     'Confirm',
    #                                     id='deriv_confirm',
    #                                     style={
    #                                         'marginLeft': 10,
    #                                         'display': 'inline-block',
    #                                         'verticalAlign': 'top'
    #                                     }
    #                                 ),
    #                                 html.Div(
    #                                     children=[
    #                                         html.Div(
    #                                             '',
    #                                             id='deriv_tracker',
    #                                             style={
    #                                                 'fontWeight': 'bold',
    #                                                 'backgroundColor': '#50C878',
    #                                                 'borderRight': '5px solid #2DC7D8',
    #                                                 'borderLeft': '5px solid #2DC7D8',
    #                                                 'borderRadius': '10px',
    #                                                 'marginTop': 25,
    #                                                 'marginRight': 20,
    #                                                 'display': 'inline-block'
    #                                             }
    #                                         ),
    #                                         dcc.Store(id='deriv_params', data=''),
    #                                         html.Button(
    #                                             'clear',
    #                                             id='deriv_clear',
    #                                             style={
    #                                                 'marginTop': 25,
    #                                                 'marginRight': 50,
    #                                                 'display': 'inline-block'
    #                                             }
    #                                         )
    #                                     ],
    #                                     style={'textAlign': 'right'}
    #                                 ),
    #                                 dcc.Checklist(
    #                                     id='derivmodes',
    #                                     options=[
    #                                         {'label': 'Show Lines', 'value': 'lines'},
    #                                         {'label': 'Show Markers', 'value': 'markers'}
    #                                     ],
    #                                     value=['lines', 'markers'],
    #                                     labelStyle={'display': 'inline-block'},
    #                                     style={
    #                                         'marginTop': 30,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 )
    #                             ],
    #                             style={
    #                                 'backgroundColor': '#FFFDD0',
    #                                 'height': 300,
    #                                 'borderTop': '25px solid #FFFDD0',
    #                                 'borderBottom': '1px solid',
    #                                 'borderBottomLeftRadius': 15,
    #                                 'borderBottomRightRadius': 15
    #                             }
    #                         ),
    #                         id='deriv_tab',
    #                         label='Derivative',
    #                         style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#607D8B',
    #                             'borderBottom': '5px solid #FFFDD0',
    #                             'color': 'white'
    #                         },
    #                         selected_style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#50C878',
    #                             'borderTop': '2px solid #607D8B',
    #                             'borderBottom': '1px solid #607D8B'
    #                         }
    #                     ),
    #                     dcc.Tab(
    #                         html.Div(
    #                             id='fit_div',
    #                             children=[
    #                                 dcc.Dropdown(
    #                                     id='fit_dropdown',
    #                                     options=[
    #                                         {'label': 'Linear', 'value': 'linear'},
    #                                         {'label': 'Polynomial', 'value': 'polynomial'},
    #                                         {'label': 'Exponential', 'value': 'exponential'}
    #                                     ]
    #                                 ),
    #                                 html.Pre(
    #                                     id='show_func'
    #                                 ),
    #                                 html.Div(
    #                                     id='fit_params',
    #                                     style={'marginLeft': 10}
    #                                 ),
    #                                 dcc.Store(
    #                                     id='fit_iguess'
    #                                 ),
    #                                 html.Button(
    #                                     'Confirm',
    #                                     id='fit_confirm',
    #                                     style={
    #                                         'marginLeft': 10,
    #                                         'marginTop': 10
    #                                     }
    #                                 ),
    #                                 dcc.Checklist(
    #                                     id='fitmodes',
    #                                     options=[
    #                                         {'label': 'Show Lines', 'value': 'lines'},
    #                                         {'label': 'Show Markers', 'value': 'markers'},
    #                                         {'label': 'Show Fit Parameters', 'value': 'params'}
    #                                     ],
    #                                     value=['lines', 'markers', 'params'],
    #                                     labelStyle={'display': 'inline-block'},
    #                                     style={
    #                                         'marginTop': 30,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 ),
    #                                 dcc.RadioItems(
    #                                     id='fitdata',
    #                                     options=[
    #                                         {'label': 'Raw Data', 'value': 'raw'},
    #                                         {'label': 'Derivative', 'value': 'deriv'}
    #                                     ],
    #                                     value='raw',
    #                                     labelStyle={'display': 'inline-block'},
    #                                     style={
    #                                         'marginTop': 30,
    #                                         'textAlign': 'center'
    #                                     }
    #                                 )
    #                             ],
    #                             style={
    #                                 'backgroundColor': '#FFFDD0',
    #                                 'height': 300,
    #                                 'borderTop': '25px solid #FFFDD0',
    #                                 'borderBottom': '1px solid',
    #                                 'borderBottomLeftRadius': 15,
    #                                 'borderBottomRightRadius': 15
    #                             }
    #                         ),
    #                         id='fit_tab',
    #                         label='Function Fit',
    #                         style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#607D8B',
    #                             'borderBottom': '5px solid #FFFDD0',
    #                             'color': 'white'
    #                         },
    #                         selected_style={
    #                             'borderTopLeftRadius': 15,
    #                             'borderTopRightRadius': 15,
    #                             'backgroundColor': '#50C878',
    #                             'borderTop': '2px solid #607D8B',
    #                             'borderBottom': '1px solid #607D8B'
    #                         }
    #                     )
    #                 ],
    #                 style={
    #                     'marginTop': 25
    #                 }
    #             )
    #         ],
    #         className='four columns'
    #     )
    # ])
