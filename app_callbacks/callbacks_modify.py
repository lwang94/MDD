import dash
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate

from app_callbacks import callbacks_modify_util as util
from app_layouts import smooth_layout
from app_layouts import derive_layout


def modify_callbacks(app):

    # Showing/hiding modify section
    @app.callback(
        Output('modify_collapse', 'is_open'),
        [Input('modify_collapse_button', 'n_clicks')],
        [State('modify_collapse', 'is_open')]
    )
    def collapse_metadata(nclicks, isopen):
        if nclicks:
            return not isopen
        return isopen

    # Show different div for different operation
    @app.callback(
        [Output('smooth_div', 'style'),
         Output('derive_div', 'style'),
         Output('fit_div', 'style')],
        [Input('smooth_button', 'n_clicks'),
         Input('derive_button', 'n_clicks'),
         Input('fit_button', 'n_clicks')]
    )
    def show_modify_div(smooth, derive, fit):
        ctx = dash.callback_context
        
        # Show smoothing div (also use as default)
        if (
            ctx.triggered[-1]['prop_id'] == 'smooth_button.n_clicks'
            or ctx.triggered[-1]['prop_id'] == '.'
        ):
            return smooth_layout.smooth_style(), {'display': 'none'}, {'display': 'none'}
        # Show derivative div
        if ctx.triggered[-1]['prop_id'] == 'derive_button.n_clicks':
            return {'display': 'none'}, derive_layout.derive_style(), {'display': 'none'}
        # Show fitting div
        if ctx.triggered[-1]['prop_id'] == 'fit_button.n_clicks':
            return {'display': 'none'}, {'display': 'none'}, {}

        else:
            raise PreventUpdate

    # Show current operations as text and store information
    # for other callbacks
    @app.callback(
        [Output('show_operations', 'children'),
         Output('modify_operations', 'data')], # store information 
        [Input('modify', 'layout'),
         Input('smooth_bool', 'on'),
         Input('derive_bool', 'on'),
         Input('fit_bool', 'on')]
    )
    def define_operations(layout, smooth, derive, fit):
        # For each operation, determine whether or not it will be performed
        mapping = {
            'smooth': smooth,
            'derive': derive,
            'fit': fit
        }

        # Determine order of operations
        operations = []
        for l in sorted(layout, key=lambda element: element['x']): # sort by x-position in layout
            operations.append((l['i'], mapping[l['i']]))
        
        # Create text to show user
        message = util.show_operation_order(operations, 'x')
        
        return message, operations
    
    # Record previous operations in tooltip
    @app.callback(
        Output('prev_operations', 'children'),
        [Input('modify_confirm', 'n_clicks'),
         Input('modify_reset', 'n_clicks')],
        [State('modify_operations', 'data'),
         State('prev_operations', 'children')]
    )
    def update_x(confirm, reset, operations, prev):
        ctx = dash.callback_context 

        # record of operations that user confirmed
        if ctx.triggered[-1]['prop_id'] == 'modify_confirm.n_clicks':
            return 'x = ' + util.show_operation_order(operations, prev.split(' = ')[1])
        # default record when no operations or user has reset
        else:
            return 'x = MDD'
