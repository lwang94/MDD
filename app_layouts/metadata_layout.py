import dash_table as dt
import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc

import math


def layout_metadata():
    """
    Entire layout for metadata section
    """
    return html.Div(
        children=[
            # Button to show/hide metadata section
            html.Button(
                'Metadata', 
                id='metadata_collapse_button',
                style={
                    'fontSize': '8',
                    'background': '#50C878'
                }
            ),
            # Metadata section
            dbc.Collapse(
                children=[
                    layout_datatable(), # Datatable
                    layout_metabuttons(), # confirm and add row buttons
                ],
                id='metadata_collapse',
                className='row',
                style={
                    'borderRadius': '25px',
                    'backgroundColor': '#FFFDD0',
                    'border': '1px solid'
                }
            )
        ],
        className='col-sm-6'
    )


def layout_datatable():
    """
    Metadata table layout
    """
    return html.Div(
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
                    'name': 'Start',
                    'id': 'Start'
                },
                {
                    'name': 'Stop',
                    'id': 'Stop'
                },
                {
                    'name': 'Step',
                    'id': 'Step'
                },
                {
                    'name': 'Custom',
                    'id': 'Custom'
                }
            ],
            data=[
                {
                    'Axis': math.nan,
                    'Name': '',
                    'Start': '',
                    'Stop': '',
                    'Step': '',
                    'Custom': ''
                }
                for i in range(3)
            ],
            editable=True,
            row_deletable=True,
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
                'overflowX': 'scroll'
            }
        ),
        className='col-sm-8',
        style={
            'marginTop': '5%',
            'marginLeft': '2%'
        }
    )


def layout_metabuttons():
    """
    Buttons beside metadata table
    """
    return html.Div(
        children=[
            # Button for confirming metadata table values
            html.Button(
                'Confirm',
                id='confirm_values',
                n_clicks=0,
                style={
                    'backgroundColor': '#607D8B',
                    'color': 'white',
                    'marginBottom': 5
                }
            ),
            # Button for adding rows to metadata table
            html.Button(
                'Add Row',
                id='add_rows',
                n_clicks=0,
                style={
                    'backgroundColor': '#607D8B',
                    'color': 'white'
                }
            ),
        ],
        className='col-sm-3',
        style={
            'textAlign': 'center',
            'marginTop': '5%'
        }
    )
