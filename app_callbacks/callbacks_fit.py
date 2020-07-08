from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
from dash import callback_context

import pandas as pd
import numpy as np

import app_util as au
import MDDClass as mc
import config as cf

def linear_fit_params(app):
    return (
        html.Img(
            src=app.get_asset_url('linear_equation.png')
        )
    )


def poly_fit_params(app):
    return ([
        html.Img(
            src=app.get_asset_url('poly_equation.png')
        ),
        html.Div(
            children=[
                html.H6(
                    'Order = ',
                    style={'display': 'inline-block'}
                ),
                dcc.Input(
                    id='poly_order',
                    type='number',
                    style={
                        'display': 'inline-block',
                        'width': 75,
                        'marginLeft': 10
                    }
                )
            ]
        )
    ])


def exp_fit_params(app):
    return ([
        html.Img(
            src=app.get_asset_url('exp_equation.png')
        ),
        html.Div(
            children=[
                html.Div(
                    children=[
                        html.H6(
                            'A = ',
                            style={'display': 'inline-block'}
                        ),
                        dcc.Input(
                            id='expA',
                            style={
                                'display': 'inline-block',
                                'width': 100,
                                'marginLeft': 10
                            }
                        )
                    ],
                    className='one row'
                ),
                html.Div(
                    children=[
                        html.H6(
                            'k = ',
                            style={'display': 'inline-block'}
                        ),
                        dcc.Input(
                            id='expk',
                            style={
                                'display': 'inline-block',
                                'width': 100,
                                'marginLeft': 10
                            }
                        )
                    ],
                    className='one row'
                ),
                html.Div(
                    children=[
                        html.H6(
                            'b = ',
                            style={'display': 'inline-block'}
                        ),
                        dcc.Input(
                            id='expb',
                            style={
                                'display': 'inline-block',
                                'width': 100,
                                'marginLeft': 10
                            }
                        )
                    ],
                    className='one row'
                )
            ]
        )
    ])

def fit_callbacks(app):

    @app.callback(
        Output('fit_params', 'children'),
        [Input('fit_dropdown', 'value')]
    )
    def create_fit_params(val):
        if val == 'linear':
            return linear_fit_params(app)
        elif val == 'polynomial':
            return poly_fit_params(app)
        elif val == 'exponential':
            return exp_fit_params(app)
        else:
            raise PreventUpdate

    @app.callback(
        Output('fit_iguess', 'data'),
        [Input('fit_confirm', 'n_clicks')],
        [State('fit_params', 'children'),
         State('fit_dropdown', 'value')]
    )
    def create_fit_iguess(nclicks, params, val):
        if nclicks > 0:
            if val == 'linear':
                return (1, 1)
            elif val == 'exponential':
                inputs = au.get_axis_info(
                    params[1],
                    'pc'
                )
                try:
                    A = float(
                        au.get_axis_info(
                            inputs[0],
                            'pc'
                        )[1]['props']['value']
                    )
                    k = float(
                        au.get_axis_info(
                            inputs[1],
                            'pc'
                        )[1]['props']['value']
                    )
                    b = float(
                        au.get_axis_info(
                            inputs[2],
                            'pc'
                        )[1]['props']['value']
                    )
                except:
                    return cf.error_fitinputs

                return (A, k, b)
            elif val == 'polynomial':
                order = au.get_axis_info(
                    params[1],
                    'pc'
                )[1]['props']['value']
                p = [-1 for i in range(order)]
                return tuple(p)
            else:
                return None

    @app.callback(
        [Output('fit_error', 'displayed'),
         Output('fit_error', 'message')],
        [Input('fit_iguess', 'data')]
    )
    def display_error(fit_iguess):
        if type(fit_iguess) == str:
            return True, fit_iguess
        return False, ''