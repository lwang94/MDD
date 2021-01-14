from dash.exceptions import PreventUpdate
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH, ALL

import numpy as np
import pandas as pd

import MDDClass as mc
from app_callbacks import callbacks_add_data_util as util

def add_data_callbacks(app):

    # Showing/hiding add data section
    @app.callback(
        Output('add_data_collapse', 'is_open'),
        [Input('add_data_collapse_button', 'n_clicks')],
        [State('add_data_collapse', 'is_open')]
    )
    def collapse_metadata(nclicks, isopen):
        if nclicks:
            return not isopen
        return isopen

    # Create components for determining parameter space
    # to fill with data
    @app.callback(
        Output('data_slice', 'children'),
        [Input('metadata', 'data')],
        [State('meta_changed', 'data')]
    )
    def create_dataslice(meta, changed):
        # prevent update if metadata has not changed
        # since last update
        if not changed:
            raise PreventUpdate

        # create components
        children = []
        for row in meta:
            children.append(html.Div(
                children=[
                    row['Name'], # Name of axis
                    html.Div(
                        children=[
                            util.data_start(row), # Start input
                            util.data_slider(row), # Slider component
                            util.data_stop(row), # Stop input
                        ],
                        className='row'
                    )
                ],
                className='row'
            ))
        return children
    
    # Update slider component when start or stop input has changed
    @app.callback(
        Output({'type': 'data_slider', 'index': MATCH}, 'value'),
        [Input({'type': 'data_start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'data_stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'data_start', 'index': MATCH}, 'value'),
         State({'type': 'data_stop', 'index': MATCH}, 'value'),
         State({'type': 'metavals', 'index': MATCH}, 'data')]
    )
    def update_dataslider(nstart, nstop, start, stop, validval):
        if nstart is not None or nstop is not None: # update when inputs have lost focus
            try:
                # find index of start, stop inputs in axis values
                i_start, i_stop = util.find_data_indices(validval, start, stop)

                return [validval[i_start], validval[i_stop]]
            
            # if input values are not valid (eg. not numbers), don't update
            except:
                raise PreventUpdate

    # Update start/stop input when slider component changes
    @app.callback(
        [Output({'type': 'data_start', 'index': MATCH}, 'value'),
         Output({'type': 'data_stop', 'index': MATCH}, 'value')],
        [Input({'type': 'data_slider', 'index': MATCH}, 'value')]
    )
    def update_datastartstop(sliderval):
        return sliderval[0], sliderval[1]
    
    # Update null counter
    @app.callback(
        Output('null_counter', 'children'),
        [Input({'type': 'data_start', 'index': ALL}, 'value'),
         Input({'type': 'data_stop', 'index': ALL}, 'value'),
         Input('mdd', 'data')],
        [State({'type': 'metavals', 'index': ALL}, 'data'),
         State('ind_var', 'value'),
         State('metadata', 'data')]
    )
    def update_null_counter(start, stop, mdd, validval, label, meta):
        # grab current mdd
        mdd = mc.MDD(
            pd.DataFrame(meta), 
            label, 
            data=pd.DataFrame(mdd)
        )

        # find indices of each axis that form parameter space
        # defined by start, stop input values
        i_start, i_stop = util.find_space(validval, start, stop)

        return util.find_null_count(i_start, i_stop, mdd)
    
    # change fill tooltip based on shape of parameter space
    @app.callback(
        Output('fill_tooltip', 'children'),
        [Input({'type': 'data_start', 'index': ALL}, 'value'),
         Input({'type': 'data_stop', 'index': ALL}, 'value')],
        [State({'type': 'metavals', 'index': ALL}, 'data'),
         State('ind_var', 'value')]
    )
    def update_fill_tooltip(start, stop, validval, label):
        # find indices of each axis that form parameter space
        # defined by start, stop input values
        i_start, i_stop = util.find_space(validval, start, stop)

        s = util.define_shape(i_start, i_stop) # find shape of parameter space as string

        return (
            f'Add data by reshaping {label} column of uploaded file into {s[:-1]} array '
            'and inserting into above parameter space'
        )
