import dash
from flask_caching import Cache

import pandas as pd

import app_layout as al

from app_callbacks import callbacks_metadata
from app_callbacks import callbacks_newmdd
from app_callbacks import callbacks_newgraphs
from app_callbacks import callbacks_graphgrid
from app_callbacks import callbacks_deriv
from app_callbacks import callbacks_fit

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

# create layout
app.title = 'A3MD'
app.layout = al.app_layout()

# include callbacks
callbacks_metadata.metadata_callbacks(app)
callbacks_newmdd.mdd_callbacks(app)
callbacks_newgraphs.graphs_callbacks(app)
callbacks_graphgrid.graphgrid_callbacks(app)
callbacks_deriv.deriv_callbacks(app)
callbacks_fit.fit_callbacks(app)


if __name__ == '__main__':
    app.run_server(debug=True)
