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
    ctx, vals, title, xtitle, ytitle, ind_var, mode,
    mdd_data, metadata, moveaxis, lastslice,
    children, layout, maxrows, graphdata, graphstyle
):
    if ctx.triggered[-1]['prop_id'] == 'graphtitles.value':
        newgraphstyle = []

        if title is '':
            meta = pd.DataFrame(metadata).sort_values('Axis', ignore_index=True)
            meta['Axis'] = au.new_pos(moveaxis)
            meta = meta.sort_values('Axis', ignore_index=True)

        graphtitle = title
        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None

            if title is '':
                sing_vals = [int(j) for j in vals[i].split(',')]
                graphtitle = ''
                for j, name in enumerate(meta['Name'][:-1]):
                    graphtitle += f'{name}{sing_vals[j]}'

            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={
                        'title': graphtitle,
                        'xaxis': {
                            'title': (
                                graphstyle[i]
                                ['props']['data']
                                ['xaxis']['title']
                            )
                        },
                        'yaxis': {
                            'title': (
                                graphstyle[i]
                                ['props']['data']
                                ['yaxis']['title']
                            )
                        }
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'xaxistitles.value':
        newgraphstyle = []
        if xtitle is '':
            meta = pd.DataFrame(metadata).sort_values('Axis', ignore_index=True)
            meta['Axis'] = au.new_pos(moveaxis)
            meta = meta.sort_values('Axis', ignore_index=True)

            xtitle = meta['Name'][len(meta['Name']) - 1]

        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None
            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={
                        'title': graphstyle[i]['props']['data']['title'],
                        'xaxis': {
                            'title': xtitle
                        },
                        'yaxis': {
                            'title': (
                                graphstyle[i]
                                ['props']['data']
                                ['yaxis']['title']
                            )
                        }
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'yaxistitles.value':
        newgraphstyle = []
        if ytitle is '':
            ytitle = ind_var

        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None
            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={
                        'title': graphstyle[i]['props']['data']['title'],
                        'xaxis': {
                            'title': (
                                graphstyle[i]
                                ['props']['data']
                                ['xaxis']['title']
                            )
                        },
                        'yaxis': {
                            'title': ytitle
                        }
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'datamodes.value':
        dmode = ''
        if 'lines' in mode:
            dmode += 'lines+'
        if 'markers' in mode:
            dmode += 'markers+'

        for i in range(len(vals)):
            graphdata[i]['props']['data'][0]['mode'] = dmode

        return children, layout, maxrows, graphdata, graphstyle, vals

    elif ctx.triggered[0]['prop_id'] == 'graph_params.value' or ctx.triggered[-1]['prop_id'] == 'mdd.data':
        mdd = mc.MDD(
            pd.DataFrame(metadata)
        )
        mdd.dataDF = pd.DataFrame(mdd_data)
        mdd.move_axis(au.new_pos(moveaxis))
        newgraphdata = []

        dmode = ''
        if 'lines' in mode:
            dmode += 'lines+'
        if 'markers' in mode:
            dmode += 'markers+'

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
                        'mode': dmode
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

            dmode = ''
            if 'lines' in mode:
                dmode += 'lines+'
            if 'markers' in mode:
                dmode += 'markers+'

            newgraphdata.append(
                dcc.Store(
                    id={'type': 'linegraph_data', 'index': vals[i]},
                    data=[{
                        'x': x,
                        'y': y.flatten(),
                        'mode': dmode
                    }]
                )
            )
            newgraphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[i]},
                    data={
                        'title': title,
                        'xaxis': {
                            'title': mdd.metadata['Name'][len(mdd.metadata['Name']) - 1]
                        },
                        'yaxis': {
                            'title': ind_var
                        }
                    }
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
         Input('xaxistitles', 'value'),
         Input('yaxistitles', 'value'),
         Input('datamodes', 'value')],
        [State('graphs', 'children'),
         State('graphs', 'layout'),
         State('graphs', 'maxrows'),
         State('graphdata', 'children'),
         State('graphstyle', 'children'),
         State('metadata', 'data'),
         State('prev_val', 'data'),
         State('data_headers', 'value')]
    )
    def create_graphgrid(
        vals, mdd_data, lastslice, moveaxis,
        title, xtitle, ytitle, mode,
        children, layout, maxrows, graphdata, graphstyle,
        metadata, prev_vals, ind_var
    ):
        if len(vals) == len(prev_vals):
            ctx = callback_context
            return update_style(
                ctx,
                vals,
                title,
                xtitle,
                ytitle,
                ind_var,
                mode,
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

                    dmode = ''
                    if 'lines' in mode:
                        dmode += 'lines+'
                    if 'markers' in mode:
                        dmode += 'markers+'

                    graphdata[i] = (
                        dcc.Store(
                            id={'type': 'linegraph_data', 'index': vals[i]},
                            data=[{
                                'x': x,
                                'y': y.flatten(),
                                'mode': dmode
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

            dmode = ''
            if 'lines' in mode:
                dmode += 'lines+'
            if 'markers' in mode:
                dmode += 'markers+'

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
                        'mode': dmode
                    }]
                )
            )
            graphstyle.append(
                dcc.Store(
                    id={'type': 'linegraph_lay', 'index': vals[-1]},
                    data={
                        'title': title,
                        'xaxis': {
                            'title': mdd.metadata['Name'][len(mdd.metadata['Name']) - 1]
                        },
                        'yaxis': {
                            'title': ind_var
                        }
                    }
                )
            )

            return children, layout, maxrows, graphdata, graphstyle, vals