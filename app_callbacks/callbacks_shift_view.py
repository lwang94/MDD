from dash.dependencies import Input, Output, State, MATCH, ALL

from app_callbacks import callbacks_add_data_util as add_data_util
from app_callbacks import callbacks_shift_view_util as util


def shift_view_callbacks(app):

    # Showing/hiding add data section
    @app.callback(
        Output('shift_view_collapse', 'is_open'),
        [Input('shift_view_collapse_button', 'n_clicks')],
        [State('shift_view_collapse', 'is_open')]
    )
    def collapse_metadata(nclicks, isopen):
        if nclicks:
            return not isopen
        return isopen

    @app.callback(
        [Output('shift_view', 'children'),
         Output('shift_view', 'layout'),
         Output('shift_view', 'validX'),
         Output('shift_view', 'handleheight_lg'),
         Output('shift_view', 'handleheight_sm'),
         Output('shift_view', 'width'),
         Output('shift_view', 'numcolumns')],
        [Input('metadata', 'data')]
    )
    def create_shift_view(meta):
        numcolumns = 4 * len(meta) - 1
        width = max(450, 150 * len(meta))

        children, layout = [], []
        validX, handleheight_lg, handleheight_sm = [], [], []
        for i in range(len(meta) - 1):
            # append item to children
            children += [
                util.shift_view_draggable(meta[i]),
                util.static_x()
            ]

            # append grid placement to layout
            layout += [*util.shift_view_layout_item(i, meta[i])] 

            # valid x positions for grid (helps with horizontal dragging)
            validX += [layout[-2]['x'], layout[-1]['x']]

            # how large the draggable handles should be
            handleheight_lg += ['2%', 0]
            handleheight_sm += ['15%', 0]

        # Last axis needs special consideration
        children.append(util.shift_view_draggable(meta[-1], last=True)) # include all values for last axis

        # don't include static 'x'
        layout.append(util.shift_view_layout_item(len(meta) - 1, meta[-1])[0])
        validX.append(layout[-1]['x'])
        handleheight_lg.append('2%')
        handleheight_sm.append('15%')

        return children, layout, validX, handleheight_lg, handleheight_sm, width, numcolumns

    @app.callback(
        Output({'type': 'shift_view_axis_collapse', 'index': MATCH}, 'is_open'),
        [Input({'type': 'shift_view_axis_collapse_button', 'index': MATCH}, 'n_clicks')],
        [State({'type': 'shift_view_axis_collapse', 'index': MATCH}, 'is_open')]
    )
    def collapse_metadata(nclicks, isopen):
        if nclicks:
            return not isopen
        return isopen

    @app.callback(
        [Output('shift_view', 'rowheight'),
         Output('shift_view', 'lg')],
        [Input({'type': 'shift_view_axis_collapse', 'index': ALL}, 'is_open')]
    )
    def adjust_section_height(isopen):
        if any(isopen):
            return 350, True
        else:
            return 50, False

    # Update slider component when start or stop input has changed
    @app.callback(
        Output({'type': 'shift_slider', 'index': MATCH}, 'value'),
        [Input({'type': 'shift_start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'shift_stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'shift_start', 'index': MATCH}, 'value'),
         State({'type': 'shift_stop', 'index': MATCH}, 'value'),
         State({'type': 'data_vals', 'index': MATCH}, 'data')]
    )
    def update_dataslider(nstart, nstop, start, stop, validval):
        if nstart is not None or nstop is not None: # update when inputs have lost focus
            try:
                # find index of start, stop inputs in axis values
                i_start, i_stop = add_data_util.find_data_indices(validval, start, stop)

                return [validval[i_start], validval[i_stop]]
            
            # if input values are not valid (eg. not numbers), don't update
            except:
                raise PreventUpdate

    # Update start/stop input when slider component changes
    @app.callback(
        [Output({'type': 'shift_start', 'index': MATCH}, 'value'),
         Output({'type': 'shift_stop', 'index': MATCH}, 'value')],
        [Input({'type': 'shift_slider', 'index': MATCH}, 'value')]
    )
    def update_datastartstop(sliderval):
        return sliderval[0], sliderval[1]