from dash.dependencies import Input, Output, State
import dash_core_components as dcc
from dash import callback_context

import pandas as pd
import numpy as np

import MDDClass as mc


def deriv_callbacks(app):

    @app.callback(
        Output('deriv_dropdown', 'options'),
        [Input('metadata', 'data')]
    )
    def deriv_options(metadata):
        meta = pd.DataFrame(metadata).sort_values('Axis', ignore_index=True)

        options = []
        for name in meta['Name']:
            options.append({
                'label': name, 'value': name
            })
        return options

    @app.callback(
        [Output('deriv_tracker', 'children'),
         Output('deriv_params', 'data')],
        [Input('deriv_confirm', 'n_clicks'),
         Input('deriv_clear', 'n_clicks')],
        [State('deriv_dropdown', 'value'),
         State('deriv_tracker', 'children'),
         State('deriv_params', 'data')]
    )
    def confirm_deriv(confirm, clear, val, deriv_tracker, deriv_params):
        ctx = callback_context
        if ctx.triggered[-1]['prop_id'] == 'deriv_confirm.n_clicks':
            deriv_tracker += f'  {val.upper()}'
            deriv_params += f'{val},'
            return deriv_tracker, deriv_params
        else:
            return '', ''