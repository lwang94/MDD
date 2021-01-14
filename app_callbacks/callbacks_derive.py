from dash.dependencies import Input, Output, State


def derive_callbacks(app):

    # Defining axis options to apply derivative over
    @app.callback(
        Output('derive_axis', 'options'),
        [Input('metacopy', 'data')]
    )
    def create_axis_options(meta):
        options = []
        for row in meta:
            options.append(
                {'label': f'{row["Name"]}', 'value': f'{row["Name"]}'}
            )
        
        return options