import dash

import app_layout as al
from app_callbacks import callbacks_metadata
from app_callbacks import callbacks_mdd
from app_callbacks import callbacks_graphs
from app_callbacks import callbacks_graphgrid
from app_callbacks import callbacks_deriv
from app_callbacks import callbacks_fit

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

# create layout
app.layout = al.app_layout()

# include callbacks
callbacks_metadata.metadata_callbacks(app)
callbacks_mdd.mdd_callbacks(app)
callbacks_graphs.graphs_callbacks(app)
callbacks_graphgrid.graphgrid_callbacks(app)
callbacks_deriv.deriv_callbacks(app)
callbacks_fit.fit_callbacks(app)


if __name__ == '__main__':
    app.run_server(debug=True)
