from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
from dash.exceptions import PreventUpdate
from dash import callback_context
import plotly.graph_objects as go

import pandas as pd

import MDDClass as mc
import app_util as au


def update_style(
    ctx, vals, title, xtitle,
    mdd_data, metadata, moveaxis, lastslice,
    children, layout, maxrows, graphdata, graphstyle
):
    if (
        ctx.triggered[-1]['prop_id'] == 'graphtitles.value' and
        title is not None and title is not ''
    ):
        newgraphstyle = []
        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None
            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={'title': title}
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[0]['prop_id'] == 'graph_params.value' or ctx.triggered[-1]['prop_id'] == 'mdd.data':
        mdd = mc.MDD(
            pd.DataFrame(metadata)
        )
        mdd.dataDF = pd.DataFrame(mdd_data)
        mdd.move_axis(au.new_pos(moveaxis))
        newgraphdata = []
        for i in range(len(vals)):
            val = vals[i].split(',')
            sing_vals = [int(j) for j in val]
            last_vals = [int(j) for j in lastslice.split(':')]

            x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
            slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
            y = mdd.dataArray[tuple(slice_list)]

            newgraphdata.append(
                dcc.Store(
                    id={'type': 'linegraph_data', 'index': vals[i]},
                    data=[{
                        'x': x,
                        'y': y.flatten(),
                        'mode': 'lines+markers'
                    }]
                )
            )

        return children, layout, maxrows, newgraphdata, graphstyle, vals

    else:
        mdd = mc.MDD(
            pd.DataFrame(metadata)
        )
        mdd.dataDF = pd.DataFrame(mdd_data)
        mdd.move_axis(au.new_pos(moveaxis))
        newgraphdata, newgraphstyle = [], []
        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None
            val = vals[i].split(',')
            sing_vals = [int(j) for j in val]
            last_vals = [int(j) for j in lastslice.split(':')]

            x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
            slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
            y = mdd.dataArray[tuple(slice_list)]

            title = ''
            for j, name in enumerate(mdd.metadata['Name'][:-1]):
                title += f'{name}{sing_vals[j]}'

            newgraphdata.append(
                dcc.Store(
                    id={'type': 'linegraph_data', 'index': vals[i]},
                    data=[{
                        'x': x,
                        'y': y.flatten(),
                        'mode': 'lines+markers'
                    }]
                )
            )
            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={'title': title}
                )
            )
        return children, layout, maxrows, newgraphdata, newgraphstyle, vals





def graphgrid_callbacks(app):

    @app.callback(
        [Output('graphs', 'children'),
         Output('graphs', 'layout'),
         Output('graphs', 'maxrows'),
         Output('graphdata', 'children'),
         Output('graphstyle', 'children'),
         Output('prev_val', 'data')],
        [Input('graph_params', 'value'),
         Input('mdd', 'data'),
         Input('lastslice', 'data'),
         Input('moveaxis', 'layout'),
         Input('graphtitles', 'value'),
         Input('xaxistitles', 'value')],
        [State('graphs', 'children'),
         State('graphs', 'layout'),
         State('graphs', 'maxrows'),
         State('graphdata', 'children'),
         State('graphstyle', 'children'),
         State('metadata', 'data'),
         State('prev_val', 'data')]
    )
    def create_graphgrid(
        vals, mdd_data, lastslice, moveaxis,
        title, xtitle,
        children, layout, maxrows, graphdata, graphstyle,
        metadata, prev_vals
    ):
        if len(vals) == len(prev_vals):
            ctx = callback_context
            return update_style(
                ctx,
                vals,
                title,
                xtitle,
                mdd_data,
                metadata,
                moveaxis,
                lastslice,
                children,
                layout,
                maxrows,
                graphdata,
                graphstyle
            )

        elif len(vals) < len(prev_vals):
            remove = list(set(prev_vals) - set(vals))
            lay_keys = {layout[i]['i']: i for i in range(len(layout))}
            ctx = callback_context

            for i in remove:
                children.pop(lay_keys[i])
                layout.pop(lay_keys[i])
                graphdata.pop(lay_keys[i])
                graphstyle.pop(lay_keys[i])

            if ctx.triggered[0]['prop_id'] == 'moveaxis.layout':
                mdd = mc.MDD(
                    pd.DataFrame(metadata)
                )
                mdd.dataDF = pd.DataFrame(mdd_data)
                mdd.move_axis(au.new_pos(moveaxis))

                for i in range(len(vals)):
                    children[i]['props']['relayoutData'] = None
                    val = vals[i].split(',')
                    sing_vals = [int(j) for j in val]
                    last_vals = [int(j) for j in lastslice.split(':')]

                    x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
                    slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
                    y = mdd.dataArray[tuple(slice_list)]

                    title = ''
                    for j, name in enumerate(mdd.metadata['Name'][:-1]):
                        title += f'{name}{sing_vals[j]}'

                    graphdata[i] = (
                        dcc.Store(
                            id={'type': 'linegraph_data', 'index': vals[i]},
                            data=[{
                                'x': x,
                                'y': y.flatten(),
                                'mode': 'lines+markers'
                            }]
                        )
                    )
                    graphstyle[i] = (
                        dcc.Store(
                            id={'type': 'linegraph_lay', 'index': vals[i]},
                            data={'title': title}
                        )
                    )
            return children, layout, maxrows, graphdata, graphstyle, vals

        else:
            mdd = mc.MDD(
                pd.DataFrame(metadata)
            )
            mdd.dataDF = pd.DataFrame(mdd_data)
            mdd.move_axis(au.new_pos(moveaxis))

            sing_vals = [int(j) for j in vals[-1].split(',')]
            last_vals = [int(j) for j in lastslice.split(':')]

            title = ''
            for j, name in enumerate(mdd.metadata['Name'][:-1]):
                title += f'{name}{sing_vals[j]}'

            x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
            slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
            y = mdd.dataArray[tuple(slice_list)]

            children.append(
                dcc.Graph(
                    id={'type': 'linegraph', 'index': vals[-1]},
                    config={'editable': True},
                    style={
                        'height': '100%',
                        'width': '100%'
                    }
                )
            )

            layout.append({
                'i': vals[-1],
                'x': 0,
                'y': maxrows,
                'w': 30,
                'h': 8,
                'isResizable': True,
                'isDraggable': True
            })

            maxrows += 8

            graphdata.append(
                dcc.Store(
                    id={'type': 'linegraph_data', 'index': vals[-1]},
                    data=[{
                        'x': x,
                        'y': y.flatten(),
                        'mode': 'lines+markers'
                    }]
                )
            )
            graphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[-1]},
                    data={'title': title}
                )
            )

            return children, layout, maxrows, graphdata, graphstyle, vals