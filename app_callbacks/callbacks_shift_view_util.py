import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc

import numpy as np

from app_callbacks import callbacks_add_data_util as add_data_util


def shift_view_draggable(row, last=False):
    """
    Creates draggable component of shift view grid layout
    """
    return html.Div(
        children=[
            # axis button
            shift_view_axis_button(row),

            # collapsible component of shift view axis
            dbc.Collapse(
                children=[
                    shift_view_stop(row, last=last),
                    shift_view_slider(row, last=last),
                    shift_view_start(row)
                ],
                id={'type': 'shift_view_axis_collapse', 'index': row['Axis']},
                style={'background': '#FAEAAC'}
            )
        ]
    )


def shift_view_axis_button(row):
    """
    Create axis button part of shift view grid layout
    """
    return html.Button(
        f'{row["Name"]}', 
        id={'type': 'shift_view_axis_collapse_button', 'index': row['Axis']},
        style={
            'fontSize': '8',
            'textAlign': 'center',
            'background': '#50C878',
            'width': '100%',
            'overflow': 'hidden',
            'textOverflow': 'ellipsis'
        }
    )


def shift_view_stop(row, last=False):
    """
    Stop input for axis in shift view grid layout
    """
    # for last value, include all values in axis
    if last:
        value = row['Values'][-1]
    else:
        value = row['Values'][0]

    return dcc.Input(
        id={'type': 'shift_stop', 'index': row['Axis']},
        type='text',
        value=value,
        style={
            'width': '80%', 
            'textAlign': 'center',
            'marginLeft': '10%', 
            'marginRight': '10%'
        }
    )


def shift_view_slider(row, last=False):
    """
    Slider component for axis in shift view grid layout
    """
    # for last value, include all values in axis
    if last:
        stop = row['Values'][-1]
    else:
        stop = row['Values'][0]

    return html.Div(
        dcc.RangeSlider(
            id={'type': 'shift_slider', 'index': row['Axis']},
            min=row['Values'][0],
            max=row['Values'][-1],
            marks={i: '' for i in row['Values']},
            step=None,
            value=[row['Values'][0], stop],
            vertical=True,
            verticalHeight=200
        ),
        style={'marginLeft': '45%'}
    )


def shift_view_start(row):
    """
    Start input for axis in shift view grid layout
    """
    return dcc.Input(
        id={'type': 'shift_start', 'index': row['Axis']},
        type='text',
        value=row['Values'][0],
        style={
            'width': '80%', 
            'textAlign': 'center',
            'marginLeft': '10%', 
            'marginRight': '10%'
        }
    )


def shift_view_layout_item(i, row):
    """
    Placement of each item in
    shift view grid layout
    """
    return {
        'i': f'sv{row["Axis"]}',
        'x': i,
        'y': 0,
        'w': 1,
        'h': 1,
        'isResizable': False,
        'isDraggable': True
    }

def find_shift_shape(layout, start, stop, validval):
    """
    Finds shape of shifted view given layout and 
    start and stop of each axis
    """
    # find shape of each axis
    i_start, i_stop = add_data_util.find_space(validval, start, stop)
    shape = [i_stop[i] + 1 - i_start[i] for i in range(len(i_start))]

    # reorder according to layout
    new_pos = [layout[i]['x'] for i in range(len(layout))]
    new_shape = sorted(zip(shape, new_pos), key=lambda x: x[1])

    # show shape as string
    s = ''
    for i in range(len(shape)):
        s += f'{new_shape[i][0]}x'
    
    return s[:-1]