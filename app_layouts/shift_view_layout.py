import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc
import drag_grid as dg

import config as cf


def layout_shift_view():
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
            dbc.Collapse(
                html.Div(
                    shift_view_dg(),
                    style={
                        'width': 450,
                        'overflowX': 'scroll'
                    }
                ),
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


def shift_view_dg():
    return dg.DragGrid(
        id='shift_view',
        label='label',
        children=[],
        layout=[],
        lg=False,
        # divstyle={'border': 'solid'},
        rowheight=50,
        maxrows=1
    )