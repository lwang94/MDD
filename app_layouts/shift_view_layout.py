import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc
import drag_grid as dg

import config as cf


def layout_shift_view():
    """
    Entire layout for shift view section
    """
    return html.Div(
        children=[
            # Button to show/hide change view section
            html.Button(
                'Shift View', 
                id='shift_view_collapse_button',
                style={
                    'fontSize': '8',
                    'background': '#50C878',
                    'width': '28%'
                }
            ),
            # Shift view section
            dbc.Collapse(
                shift_view_div(),
                id='shift_view_collapse',
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


def shift_view_div():
    """
    Collapse section of shift view
    """
    return html.Div(
        children=[
            shift_view_dg(), # drag grid
            html.Hr( # separator
                style={
                    'marginTop': 0, 
                    'marginBottom': '1%'
                }
            ),
            html.Pre( # show shape of shifted view
                id='shift_view_shape',
                style={'marginLeft': '5%'}
            ),
            html.Hr( # separator
                style={
                    'marginTop': 0,
                    'marginBottom': '1%'
                }
            ),
            shift_view_buttons() # confirm button
        ],
        style={
            'width': 450,
            'overflowX': 'scroll',
            'overflowY': 'hidden'
        }
    )


def shift_view_dg():
    """
    Grid layout for moving and slicing axes
    of shift view
    """
    return dg.DragGrid(
        id='shift_view',
        label='label',
        children=[],
        layout=[],
        lg=False,
        limitY=True,
        rowheight=50,
        maxrows=1
    )


def shift_view_buttons():
    """
    Confirm button in shift view section
    """
    return html.Button(
        'Confirm',
        id='shift_confirm',
        n_clicks=0,
        style={
            'marginLeft': '3%',
            'background': '#607D8B',
            'color': 'white'
        }
    )