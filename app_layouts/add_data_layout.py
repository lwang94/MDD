import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc

import config as cf


def layout_add_data():
    """
    Entire layout for add data section
    """
    return html.Div(
        children=[
            # Button to show/hide add data section
            html.Button(
                'Add Data', 
                id='add_data_collapse_button',
                style={
                    'fontSize': '8',
                    'background': '#50C878',
                    'width': '28%'
                }
            ),
            # Add data section
            dbc.Collapse(
                children=[
                    # slicing data to determine parameter space
                    html.Div(
                        id='data_slice',
                        className='row',
                        style={'marginLeft': '10%'}
                    ),
                    html.Hr(style={'marginBottom': '1%'}),
                    # counter for number of null values in space
                    html.Pre(
                        id='null_counter', 
                        className='row',
                        style={'marginLeft': '5%'}
                    ),
                    html.Hr(style={'marginTop': 0, 'marginBottom': '3%'}),
                    # buttons to upload data
                    layout_add_data_buttons(),
                ],
                id='add_data_collapse',
                style={
                    'borderRadius': '25px',
                    'backgroundColor': '#FFFDD0',
                    'border': '1px solid'
                }
            )
        ],
        className='row',
        style={'marginBottom': '5%'}
    )


def layout_add_data_buttons():
    """
    Layout for buttons that upload data
    """
    return html.Div(
        children=[
            layout_fill(), # Add data through filling parameter space
            layout_join() # Add data through joining to dataset
        ],
        className='row',
        style={'marginLeft': '20%', 'marginBottom': '2%'}
    )


def layout_fill():
    """
    Button and tooltip for adding data through filling
    """
    return html.Div([
        # upload button (wrap in Div for tooltip to target)
        html.Div(
            dcc.Upload(
                html.Button(
                    'Add (fill)',
                    id='fill_button',
                    style={
                        'background': '#607D8B',
                        'color': 'white'
                    }
                ),
                id='fill',
                multiple=True
            ),
            id='fill_div'
        ),
        # tooltip for upload method
        dbc.Tooltip(
            id='fill_tooltip',
            target='fill_div',
            placement='bottom',
            style={'fontSize': 12}
        )
    ])


def layout_join():
    """
    Button and tooltip for adding data through joining
    """
    return html.Div([
        # upload button (wrap in Div for tooltip to target)
        html.Div(
            dcc.Upload(
                html.Button(
                    'Add (join)',
                    id='join_button',
                    style={
                        'background': '#607D8B',
                        'color': 'white'
                    }
                ),
                id='join',
                # put small space between neighboring button
                style={'marginLeft': '5%'}
            ),
            id='join_div'
        ),
        # tooltip for upload method
        dbc.Tooltip(
            ('Add data by matching values with uploaded file. '  
            'File must contain headers for all parameters'),
            target='join_div',
            placement='bottom',
            style={'fontSize': 12}
        )
    ])