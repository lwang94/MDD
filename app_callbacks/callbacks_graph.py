from dash.dependencies import Input, Output, State

import pandas as pd

import MDDClass as mc
from app_callbacks import callbacks_graph_util as util

def graph_callbacks(app):

    # filling grid with graphs
    @app.callback(
        [Output('graph_dg', 'children'),
         Output('graph_dg', 'layout'),
         Output('graph_dg', 'divstyle'),
         Output('graph_dg', 'handleheight_lg'),
         Output('graph_dg', 'maxrows')],
        [Input('mddcopy', 'data')],
        [State('metacopy', 'data'),
         State('ind_var', 'value')]
    )
    def create_graph_grid(mdd, meta, label):
        # load mdd
        mdd = mc.MDD(
            pd.DataFrame(meta), 
            label, 
            data=pd.DataFrame(mdd)
        )

        # define x axis and number of graphs needed 
        x = mdd.metadata['Values'].iloc[-1]
        num_graphs = len(mdd.dataDF) // len(x)

        # create children, layout and handleheight list
        children = []
        layout = []
        handleheight_lg = []
        for i in range(num_graphs):
            children.append(util.create_graph_child(i, x, mdd))
            layout.append(util.create_graph_layout(i))
            handleheight_lg.append('2%')

        # define style for graph Divs
        divstyle = {'border': 'solid'}

        # define maximum number of rows in grid
        maxrows = (num_graphs // 2 + 1) * 10

        return children, layout, divstyle, handleheight_lg, maxrows 





            
