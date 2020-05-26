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
    start_row=0, w=1, h=1, spacex=1, spacey=1,
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


def line_graph(mdd, sing_vals, last_vals):
    x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
    slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
    y = mdd.dataArray[tuple(slice_list)]

    title = ''
    for i, name in enumerate(mdd.metadata['Name'][:-1]):
        title += f'{name}-{sing_vals[i]}'


    return dcc.Graph(
        figure={
            'data': [go.Scatter(x=x, y=y.flatten(), mode='lines+markers')],
            'layout': go.Layout(
                title={'text': title},
                xaxis={'title': mdd.metadata['Name'].iloc[-1]}
            )
        },
        style={
            'height': '90%',
            'width': '90%'
        }
    )