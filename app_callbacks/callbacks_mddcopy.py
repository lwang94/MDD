import dash


def mddcopy_callbacks(app):


    @app.callback(
        Output('mddcopy', 'data')
        [Input('mdd', 'data')]
    )
    def create_update_mddcopy(mdd):
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'mdd.data':
            return mdd