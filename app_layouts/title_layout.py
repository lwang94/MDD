import dash_html_components as html
import dash_core_components as dcc

def layout_title():
    """
    Layout at top of the page
    """
    return html.Div(
            children=[
                html.Hr(
                    style={'borderRight': '100px solid #607D8B'},
                    className='col-sm-4'
                ),
                html.Div(
                    children=[
                        # Title Text
                        html.H1('A3MD'),

                        # Option to load dataset .csv
                        dcc.Upload(
                            html.Button(
                                'Load Data',
                                id='load_data_button',
                                style={
                                    'background': '#607D8B',
                                    'color': 'white'
                                }
                            ),
                            id='load_data'
                        ),

                        # Storing dataset read .csv file as DataFrame
                        dcc.Store(id='load')
                    ],
                    style={'textAlign': 'center'},
                    className='col-sm-1'
                ),
                html.Hr(
                    style={'borderLeft': '100px solid #607D8B'},
                    className='col-sm-4'
                )
            ],
            className='row',
            style={'margin': 'auto'}
    )