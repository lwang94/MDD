import dash
import app_layout as al

import dash_bootstrap_components as dbc

from app_callbacks import callbacks_title
from app_callbacks import callbacks_metadata
from app_callbacks import callbacks_mdd
from app_callbacks import callbacks_add_data
from app_callbacks import callbacks_shift_view
from app_callbacks import callbacks_mddcopy

from app_callbacks import callbacks_graph 

from app_callbacks import callbacks_modify
from app_callbacks import callbacks_smooth
from app_callbacks import callbacks_derive


app = dash.Dash(
    __name__,
    external_stylesheets=[dbc.themes.BOOTSTRAP]
)
app.config.suppress_callback_exceptions = True

# create layout
app.title = 'A3MD'
app.layout = al.app_layout(app)

# include callbacks
callbacks_title.title_callbacks(app) # callbacks for title section
callbacks_metadata.metadata_callbacks(app) #callbacks for metadata section
callbacks_mdd.mdd_callbacks(app) # callbacks for creating MDD
callbacks_add_data.add_data_callbacks(app) # callbacks for add data section
callbacks_shift_view.shift_view_callbacks(app) # callbacks for shift view section
callbacks_mddcopy.mddcopy_callbacks(app) # callbacks for creating copy of MDD

callbacks_graph.graph_callbacks(app) # TO DO: MAKE GRAPHS PRETTIER

callbacks_modify.modify_callbacks(app) # callbacks for modify section
callbacks_smooth.smooth_callbacks(app) # callbacks for smooth section
callbacks_derive.derive_callbacks(app)

# callbacks_newgraphs.graphs_callbacks(app)
# callbacks_newgraphgrid.graphgrid_callbacks(app)
# callbacks_deriv.deriv_callbacks(app)
# callbacks_fit.fit_callbacks(app)


if __name__ == '__main__':
    app.run_server(debug=True)
