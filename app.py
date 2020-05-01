import dash

import app_layout as al
from callbacks_metadata import metadata_callbacks
from callbacks_mdd import mdd_callbacks
from callbacks_graphs import graphs_callbacks

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

app.layout = al.app_layout()
metadata_callbacks(app)
mdd_callbacks(app)
graphs_callbacks(app)


if __name__ == '__main__':
    app.run_server(debug=True)