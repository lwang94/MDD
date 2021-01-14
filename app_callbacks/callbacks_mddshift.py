def mddshift_callbacks(app):

    # create and update copy of mdd used for quicker graphing and data analysis
    @app.callback(
        [Output('mddshift', 'data'),
         Output('metashift', 'data')],
        [Input('shift_confirm', 'n_clicks')],
        [State('mdd', 'data'),
         State('metadata', 'data'),
         State('ind_var', 'value'),
         State('shift_view', 'layout'),
         State({'type': 'shift_start', 'index': ALL}, 'value'),
         State({'type': 'shift_stop', 'index': ALL}, 'value'),
         State({'type': 'metavals', 'index': ALL}, 'data')]
    )
    def create_mddshift(
        shift_confirm,
        mdd, meta, label, 
        layout, start, stop, validval
    ):

        #create shifted view of mdd without modifying data
        return util.shift_mdd(
            meta, 
            label, 
            mdd, 
            validval, 
            start, 
            stop, 
            layout
        )
    