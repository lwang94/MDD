import dash_html_components as html 
import dash_core_components as dcc
import dash_bootstrap_components as dbc
import dash_daq as daq

import drag_grid as dg

from app_layouts import smooth_layout as smooth
from app_layouts import derive_layout as derive
from app_layouts import fit_layout as fit


def layout_modify():
    """
    Entire layout for modify section
    """
    return html.Div(
        children=[
            # Button to show/hide modify section
            html.Button(
                'Modify', 
                id='modify_collapse_button',
                style={
                    'fontSize': '8',
                    'background': '#50C878',
                    'width': '28%'
                }
            ),
            # Modify section
            modify_collapsible(),
            # Storing modify operations
            dcc.Store(id='modify_operations')
        ],
        className='row',
        style={'marginBottom': '5%'}
    )


def modify_collapsible():
    """
    Collapsible part of modify section
    """
    return dbc.Collapse(
        children=[
            # Buttons for different operations in a grid layout
            modify_dg(),
            html.Hr(style={'marginTop': 0, 'marginBottom': '2%'}),

            # Divs containing parameters for the different available operations
            html.Div(
                children=[
                    smooth.smooth_layout(), # layout for smoothing operation
                    derive.derive_layout(), # layout for derivative operation
                    fit.fit_layout() # layout for fitting operation
                ],
                className='row',
                style={'marginLeft': '3%'}
            ),
            html.Hr(style={'marginTop': '2%', 'marginBottom': '1%'}),

            # Text telling user what combination of operations they are performing
            modify_text(),
            html.Hr(style={'marginTop': 0, 'marginBottom': '1%'}),

            # Reset and confirm buttons
            modify_buttons()
        ],
        id='modify_collapse',
        style={
            'width': 450,
            'borderRadius': '25px',
            'backgroundColor': '#FFFDD0',
            'border': '1px solid'
        }
    )


def modify_dg():
    """
    Grid layout containing buttons
    to display different modify operations
    """
    # store layout in variable to avoid repeat calculation
    layout = modify_dg_layout()

    return dg.DragGrid(
        id='modify',
        label='label',
        children=[
            modify_dg_button('Smooth', 'smooth_button'),
            modify_dg_button('Derive', 'derive_button'),
            modify_dg_button('Fit', 'fit_button')
        ],
        layout=layout,
        validX=[i for i in range(len(layout))],
        handleheight_sm=[
            '15%' for i in range(len(layout))
        ],
        lg=False,
        limitX=True,
        limitY=True,
        rowheight=50,
        maxrows=1,
        width=420,
        numcolumns=3
    )


def modify_dg_layout():
    """
    Defining layout for modify grid layout
    """
    # list of buttons in layout
    buttons = ['smooth', 'derive', 'fit']

    return [
        {
            'i': f'{buttons[i]}',
            'x': i,
            'y': 0,
            'w': 1,
            'h': 1,
            'isResizable': False,
            'isDraggable': True
        } for i in range(len(buttons))
    ]

    
def modify_dg_button(name, identity):
    """
    Template for creating modify grid layout button
    """
    return html.Button(
        name,
        id=identity,
        style={
            'fontSize': '8',
            'textAlign': 'center',
            'background': '#50C878',
            'width': '100%'
        }
    )


def modify_text():
    """
    Text describing current operations
    with record of previous operations as tooltip
    """
    return html.Div([
        # Current operations
        html.Pre(
            id='show_operations', 
            style={
                'fontWeight': 'bold',
                'fontSize': 14,
                'textAlign': 'center',
                'marginLeft': '3%'
            }
        ),
        # Tooltip explaining previous operations
        dbc.Tooltip(
            id='prev_operations',
            target='show_operations',
            placement='bottom',
            style={'fontSize': 12}
        )
    ])


def modify_buttons():
    """
    Buttons for confirming modify operations
    and resetting data back to original
    """
    return html.Div(
        children=[
            # Button to reset data back to original
            html.Button(
                'Reset X',
                id='modify_reset',
                n_clicks=0,
                style={
                    'marginLeft': '3%',
                    'background': '#607D8B',
                    'color': 'white'
                }
            ),
            # Button to confirm modify operations
            html.Button(
                'Confirm',
                id='modify_confirm',
                n_clicks=0,
                style={
                    'marginLeft': '3%',
                    'background': '#607D8B',
                    'color': 'white'
                }
            )
        ],
        className='row',
        style={'marginLeft': '20%', 'marginBottom': '2%'}
    )
