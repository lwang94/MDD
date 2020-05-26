import dash

import app_layout as al
from app_callbacks import callbacks_metadata
from app_callbacks import callbacks_mdd
from app_callbacks import callbacks_graphs

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

# create layout
app.layout = al.app_layout()

# include callbacks
callbacks_metadata.metadata_callbacks(app)
callbacks_mdd.mdd_callbacks(app)
callbacks_graphs.graphs_callbacks(app)


if __name__ == '__main__':
    app.run_server(debug=False)
