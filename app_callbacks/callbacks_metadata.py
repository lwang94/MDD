import dash
from dash.dependencies import Input, Output, State, MATCH

from app_callbacks import callbacks_metadata_util as util


def metadata_callbacks(app):

    # Showing/hiding metadata section
    @app.callback(
        Output('metadata_collapse', 'is_open'),
        [Input('metadata_collapse_button', 'n_clicks')],
        [State('metadata_collapse', 'is_open')]
    )
    def collapse_metadata(nclicks, isopen):
        if nclicks:
            return not isopen
        return isopen

    # Update metadata table
    @app.callback(
        Output('metadata_table', 'data'),
        [Input('add_rows', 'n_clicks'),
         Input('load', 'data')],
        [State('metadata_table', 'data'),
         State('ind_var', 'value')]
    )
    def update_metatable(n_clicks, load, rows, label):
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'add_rows.n_clicks':
            return util.add_rows(n_clicks, rows)
        if ctx.triggered[-1]['prop_id'] == 'load.data':
            return util.load_metatable(load, label, rows)
        
        # return previous metatable if no updates
        return rows
