import io
import base64

import pandas as pd
import numpy as np
import scipy.optimize as opt

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


def linear_func(x, *p):
    return p[0] * x + p[1]


def exponential_func(x, *p):
    return p[0] * np.exp(p[1] * x) + p[2]


def polynomial_func(order):
    return lambda x, *p: sum([p[i] * x ** i for i in range(order)])


def calc_deriv(deriv, mdd):
    if deriv is '':
        deriv_array = np.full(mdd.dataArray.shape, None)
    else:
        deriv_params = deriv.split(',')[:-1]
        deriv_array = mdd.num_deriv(deriv_params)
    return deriv_array


def find_derivslice(deriv, deriv_array, slice_list):
    deriv_y = deriv_array[tuple(slice_list)]
    if deriv is '':
        show_derivlegend = False
    else:
        show_derivlegend = True

    return deriv_y, show_derivlegend


def empty_fit(x):
    fit_y = np.full(len(x), None)
    param_name = ''
    r2 = ''
    popt = ()
    show_fitlegend = False
    return fit_y, param_name, r2, popt, show_fitlegend


def choose_fitdata(fitdata, y, deriv_y):
    if fitdata == 'raw':
        ydata = y
    else:
        ydata = deriv_y
    return ydata


def choose_func(fit_dropdown, fit_iguess):
    if fit_dropdown == 'linear':
        func = linear_func
        param_name = 'm = {0:.2e}<br>b = {1:.2e}'
    elif fit_dropdown == 'exponential':
        func = exponential_func
        param_name = 'A = {0:.2e}<br>k = {1:.2e}<br>b = {2:.2e}'
    elif fit_dropdown == 'polynomial':
        func = polynomial_func(len(fit_iguess))
        param_name = ''
        for i in range(len(fit_iguess)):
            param_name += f'p{i} = ' + '{' + str(i) + ':.2e}<br>'

    return func, param_name


def perform_fit(func, x, ydata, fit_iguess, param_name):
    try:
        popt, pcov = opt.curve_fit(func, x, ydata.flatten(), p0=fit_iguess)
        fit_y = func(x, *popt)
        ss = (
            np.sum((ydata.flatten() - fit_y) ** 2)
            / np.sum((ydata.flatten() - np.mean(ydata)) ** 2)
        )
        r2 = 'R2 = {0:.2e}<br><br>'.format(1-ss)
        param_name = param_name
    except ValueError:
        fit_y = np.full(len(x), None)
        param_name = 'ERROR: Missing data.<br>Can\'t perform fit.'
        r2 = ''
        popt=()
    except TypeError:
        fit_y = np.full(len(x), None)
        param_name = 'ERROR: Order can\'t<br>be greater than<br>amount of data<br>for poly fit.'
        r2 = ''
        popt=()
    except RuntimeError:
        fit_y = np.full(len(x), None)
        param_name = 'ERROR: Optimal params<br>not found'
        r2 = ''
        popt=()


    show_fitlegend = True

    return fit_y, param_name, r2, popt, show_fitlegend


def raw_legend(show_fitlegend, show_derivlegend):
    if show_fitlegend is True or show_derivlegend is True:
        show_rawlegend = True
    else:
        show_rawlegend = False
    return show_rawlegend


def determine_modes(mode, deriv_mode, fitmode):
    mode = graphmode(mode)
    deriv_mode = graphmode(deriv_mode)
    fit_mode = graphmode(fitmode)
    if 'params' in fitmode:
        visible = True
    else:
        visible = False

    return mode, deriv_mode, fit_mode, visible


def graphdata_store(
    index, x, y, mode, show_rawlegend,
    deriv_y, deriv_mode, show_derivlegend,
    fit_y, fit_mode, show_fitlegend
):
    return dcc.Store(
        id={'type': 'linegraph_data', 'index': index},
        data=[
            {
                'x': x,
                'y': y,
                'mode': mode,
                'name': 'Raw Data',
                'showlegend': show_rawlegend
            },
            {
                'x': x,
                'y': deriv_y,
                'mode': deriv_mode,
                'name': 'Derivative',
                'showlegend': show_derivlegend
            },
            {
                'x': x,
                'y': fit_y,
                'mode': fit_mode,
                'name': 'Fit',
                'showlegend': show_fitlegend
            }
        ]
    )


def graphstyle_store(index, title, xtitle, ytitle, text, visible):
    return dcc.Store(
        id={'type': 'linegraph_lay', 'index': index},
        data={
            'title': title,
            'xaxis': {
                'title': xtitle
            },
            'yaxis': {
                'title': ytitle
            },
            'annotations': [{
                'x': 1.12,
                'y': 0.65,
                'showarrow': False,
                'bordercolor': 'black',
                'bgcolor': 'green',
                'font': {'color': 'white'},
                'text': text,
                'xref': 'paper',
                'yref': 'paper',
                'visible': visible
            }]
        }
    )