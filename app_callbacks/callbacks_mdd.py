import dash 
from dash.dependencies import Input, Output, State, ALL
from dash.exceptions import PreventUpdate

import pandas as pd

import config as cf
import MDDClass as mc
import app_util as au
from app_callbacks import callbacks_mdd_util as util


def mdd_callbacks(app):

    # Create/update metadata and MDD
    # from different inputs
    @app.callback(
        [Output('mdd', 'data'),
         Output('metadata', 'data'),
         Output('metavalues', 'children'),
         Output('meta_changed', 'data')],
        [Input('confirm_values', 'n_clicks'),
         Input('load', 'data'),
         Input('fill', 'contents'),
         Input('join', 'contents')],
        [State('mdd', 'data'),
         State('ind_var', 'value'),
         State('metadata', 'data'),
         State('metavalues', 'children'),
         State('metadata_table', 'data'),
         State({'type': 'metavals', 'index': ALL}, 'data'),
         State({'type': 'data_start', 'index': ALL}, 'value'),
         State({'type': 'data_stop', 'index': ALL}, 'value'),
         State('fill', 'filename'),
         State('join', 'filename')]
    )
    def create_mdd(
        n_clicks, load, fill, join, 
        mdd, label, meta, metavalues, metatable, 
        validval, start, stop, fill_fname, join_fname
    ):
        """
        Create metadata and mdd
        """

        ctx = dash.callback_context
        
        # create meta/mdd from metatable
        if ctx.triggered[-1]['prop_id'] == 'confirm_values.n_clicks':
            if label is None: # check for label
                return None, cf.error_label, None, False

            return util.create_mdd_from_metatable(metatable, load, label)

        # create meta/mdd from loading data
        if ctx.triggered[-1]['prop_id'] == 'load.data':
            if label is None: # check for label
                return None, cf.error_label, None, False

            return util.create_mdd_from_load(load, label)

        # add to mdd by filling parameter space
        if ctx.triggered[-1]['prop_id'] == 'fill.contents':
            if label is None: # check for label
                return None, cf.error_label, None, False
            
            return util.fill_mdd(
                fill, label, meta, mdd, metavalues, 
                validval, start, stop, fill_fname
            )

        # add to mdd by joining to new dataset
        if ctx.triggered[-1]['prop_id'] == 'join.contents':
            if label is None: #check for label
                return None, cf.error_label, None, False
                
            return util.join_mdd(join_fname, join, meta, label, mdd, metavalues)
        
        else:
            raise PreventUpdate
