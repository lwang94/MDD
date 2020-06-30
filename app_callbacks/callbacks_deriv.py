from dash.dependencies import Input, Output, State
import pandas as pd


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