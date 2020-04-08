import dash


def mddcopy_callbacks(app):


    @app.callback(
        Output('mddcopy', 'children')
        [Input('mdd', 'children')]
    )
    def create_update_mddcopy(mdd):
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'mdd.children':
            return mdd