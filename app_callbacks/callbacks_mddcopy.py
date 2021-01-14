import dash 
from dash.dependencies import Input, Output, State, ALL
from dash.exceptions import PreventUpdate

import numpy as np
import pandas as pd 

import dash 

import MDDClass as mc
from app_callbacks import callbacks_mddcopy_util as util
from app_callbacks import callbacks_add_data_util as add_data_util


def mddcopy_callbacks(app):

    # create and update copy of mdd used for quicker graphing and data analysis
    @app.callback(
        [Output('mddcopy', 'data'),
         Output('metacopy', 'data')],
        [Input('shift_confirm', 'n_clicks'),
         Input('modify_confirm', 'n_clicks'),
         Input('modify_reset', 'n_clicks')],
        [State('mdd', 'data'),
         State('metadata', 'data'),
         State('mddcopy', 'data'),
         State('metacopy', 'data'),
         State('ind_var', 'value'),
         State('shift_view', 'layout'),
         State({'type': 'shift_start', 'index': ALL}, 'value'),
         State({'type': 'shift_stop', 'index': ALL}, 'value'),
         State({'type': 'metavals', 'index': ALL}, 'data'),
         State('modify_operations', 'data'),
         State('smooth_mode', 'value'), # smooth arguments
         State('smooth_axis', 'value'),
         State('smooth_window', 'value'),
         State('derive_axis', 'value'), # derive arguments
         State('fit_input', 'value')] # fit arguments
    )
    def create_mddcopy(
        shift_confirm, modify_confirm, modify_reset,
        mdd, meta, mddcopy, metacopy, label, 
        layout, start, stop, validval,
        operations,
        smooth_mode, smooth_ax, smooth_window,
        derive_axis,
        fit_input
    ):
        ctx = dash.callback_context

        #create shifted view of mdd without modifying data
        if (
            ctx.triggered[-1]['prop_id'] == 'shift_confirm.n_clicks' or 
            ctx.triggered[-1]['prop_id'] == 'modify_reset.n_clicks'
        ):
            return util.shift_mdd(
                meta, 
                label, 
                mdd, 
                validval, 
                start, 
                stop, 
                layout
            )
        
        # modify current view of mdd 
        if ctx.triggered[-1]['prop_id'] == 'modify_confirm.n_clicks':
            return util.modify_mdd(
                metacopy, 
                label, 
                mddcopy, 
                operations,
                smooth_mode, smooth_ax, smooth_window,
                derive_axis,
                fit_input
            )

