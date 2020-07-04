import io
import base64

import pandas as pd
import numpy as np

import dash_html_components as html
import dash_core_components as dcc
import plotly.graph_objects as go


def get_axis_info(widget, keys='pcp'):
    res = widget
    for key in keys:
        if key == 'p':
            res = res['props']
        elif key == 'c':
            res = res['children']
        else:
            raise ValueError("keys must be either p or c")

    return res


def load_data(contents, usecols):
    datapoints = []
    for csvfile in contents:
        content_string = csvfile.split(',')[1]
        decoded_string = base64.b64decode(content_string)
        data_string = io.StringIO(decoded_string.decode('utf-8'))
        if usecols is None:
            data = (
                pd.read_csv(data_string)
                .values.transpose().flatten()
            )
        else:
            data = (
                pd.read_csv(data_string, usecols=usecols)
                .values.flatten()
            )
        datapoints += list(data)
    return np.array(datapoints)


def define_draggrid(
    nrows, ncolumns, keys,
    w=1, h=1, start_row=0, spacex=1, spacey=1,
    isResizable=True, isDraggable=True
):
    layout = []
    for increment in range(len(keys)):
        itemx = increment % ncolumns
        itemy = increment // ncolumns

        item = {
            'i': keys[increment],
            'x': itemx * spacex,
            'y': start_row + itemy * spacey,
            'w': w,
            'h': h,
            'isResizable': isResizable,
            'isDraggable': isDraggable
        }
        layout.append(item)

    return layout


def new_pos(moveaxis):
    new_x = [moveaxis[i]['x'] for i in range(len(moveaxis))]
    new_y = [moveaxis[i]['y'] for i in range(len(moveaxis))]
    return [1 + new_x[i] + new_y[i] * (max(new_x) + 1) for i in range(len(new_x))]


def graphmode(mode):
    dmode = ''
    if 'lines' in mode:
        dmode += 'lines+'
    if 'markers' in mode:
        dmode += 'markers+'

    return dmode