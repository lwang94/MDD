from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
from dash.exceptions import PreventUpdate
from dash import callback_context
import plotly.graph_objects as go

import time
import pandas as pd
import numpy as np

import MDDClass as mc
import app_util as au


def update_style(
    ctx, vals, title, xtitle, ytitle, ind_var, mode,
    deriv, deriv_mode,
    fit_iguess, fitdata, fitmode, fit_dropdown,
    mddcopy, metacopy,
    children, layout, maxrows, graphdata, graphstyle
):
    if ctx.triggered[-1]['prop_id'] == 'graphtitles.n_blur':
        newgraphstyle = []

        if title is '':
            meta = pd.DataFrame(metacopy).sort_values('Axis', ignore_index=True)

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
                        },
                        'annotations': (
                            graphstyle[i]
                            ['props']['data']
                            ['annotations']
                        )
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'xaxistitles.n_blur':
        newgraphstyle = []
        if xtitle is '':
            meta = pd.DataFrame(metacopy).sort_values('Axis', ignore_index=True)
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
                        },
                        'annotations': (
                            graphstyle[i]
                            ['props']['data']
                            ['annotations']
                        )
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'yaxistitles.n_blur':
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
                        },
                        'annotations': (
                            graphstyle[i]
                            ['props']['data']
                            ['annotations']
                        )
                    }
                )
            )
        return children, layout, maxrows, graphdata, newgraphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'datamodes.value':
        mode = au.graphmode(mode)
        for i in range(len(vals)):
            graphdata[i]['props']['data'][0]['mode'] = mode

        return children, layout, maxrows, graphdata, graphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'derivmodes.value':
        derivmode = au.graphmode(deriv_mode)
        for i in range(len(vals)):
            graphdata[i]['props']['data'][1]['mode'] = derivmode

        return children, layout, maxrows, graphdata, graphstyle, vals

    elif ctx.triggered[-1]['prop_id'] == 'fitmodes.value':
        fit_mode = au.graphmode(fitmode)
        if 'params' in fitmode:
            visible = True
        else:
            visible = False

        for i in range(len(vals)):
            graphdata[i]['props']['data'][2]['mode'] = fit_mode
            graphstyle[i]['props']['data']['annotations'][0]['visible'] = visible

        return children, layout, maxrows, graphdata, graphstyle, vals

    elif (
        ctx.triggered[0]['prop_id'] == 'graph_params.value'
        or ctx.triggered[-1]['prop_id'] == 'mdd.data'
        or ctx.triggered[-1]['prop_id'] == 'deriv_params.data'
        or ctx.triggered[-1]['prop_id'] == 'fit_iguess.data'
        or ctx.triggered[-1]['prop_id'] == 'fitdata.value'
    ):
        mdd = mc.MDD(
            pd.DataFrame(metacopy)
        )
        mdd.dataDF = pd.DataFrame(mddcopy)

        deriv_array = au.calc_deriv(deriv, mdd)

        if fit_iguess is not None:
            func, paramname = au.choose_func(fit_dropdown, fit_iguess)

        mode, deriv_mode, fit_mode, visible = au.determine_modes(mode, deriv_mode, fitmode)

        newgraphdata = []
        for i in range(len(vals)):
            sing_vals = [int(j) for j in vals[i].split(',')]

            x = np.asarray(mdd.metadata['Values'].iloc[-1])
            slice_list = [slice(i, i+1) for i in sing_vals]
            y = mdd.dataArray[tuple(slice_list)]

            deriv_y, show_derivlegend = au.find_derivslice(deriv, deriv_array, slice_list)

            if fit_iguess is None:
                fit_y, param_name, r2, popt, show_fitlegend = au.empty_fit(x)
            else:
                ydata = au.choose_fitdata(fitdata, y, deriv_y)
                fit_y, param_name, r2, popt, show_fitlegend = au.perform_fit(
                    func, x, ydata, fit_iguess, paramname
                )

            show_rawlegend = au.raw_legend(show_fitlegend, show_derivlegend)

            newgraphdata.append(
                    au.graphdata_store(
                        vals[i],
                        x,
                        y.flatten(),
                        mode,
                        show_rawlegend,
                        deriv_y.flatten(),
                        deriv_mode,
                        show_derivlegend,
                        fit_y.flatten(),
                        fit_mode,
                        show_fitlegend
                    )
            )

            graphstyle[i]['props']['data']['annotations'] = [{
                            'x': 1.12,
                            'y': 0.65,
                            'showarrow': False,
                            'bordercolor': 'black',
                            'bgcolor': 'green',
                            'font': {'color': 'white'},
                            'text': r2 + param_name.format(*popt),
                            'xref': 'paper',
                            'yref': 'paper',
                            'visible': visible
                        }]

        return children, layout, maxrows, newgraphdata, graphstyle, vals

    else:
        mdd = mc.MDD(
            pd.DataFrame(metacopy)
        )
        mdd.dataDF = pd.DataFrame(mddcopy)

        deriv_array = au.calc_deriv(deriv, mdd)

        if fit_iguess is not None:
            func, paramname = au.choose_func(fit_dropdown, fit_iguess)

        mode, deriv_mode, fit_mode, visible = au.determine_modes(mode, deriv_mode, fitmode)

        newgraphdata, newgraphstyle = [], []
        for i in range(len(vals)):
            children[i]['props']['relayoutData'] = None
            sing_vals = [int(j) for j in vals[i].split(',')]

            x = np.asarray(mdd.metadata['Values'].iloc[-1])
            slice_list = [slice(i, i+1) for i in sing_vals]
            y = mdd.dataArray[tuple(slice_list)]

            deriv_y, show_derivlegend = au.find_derivslice(deriv, deriv_array, slice_list)

            if fit_iguess is None:
                fit_y, param_name, r2, popt, show_fitlegend = au.empty_fit(x)
            else:
                ydata = au.choose_fitdata(fitdata, y, deriv_y)
                fit_y, param_name, r2, popt, show_fitlegend = au.perform_fit(
                    func, x, ydata, fit_iguess, paramname
                )

            show_rawlegend = au.raw_legend(show_fitlegend, show_derivlegend)

            title = ''
            for j, name in enumerate(mdd.metadata['Name'][:-1]):
                title += f'{name}{sing_vals[j]}'

            newgraphdata.append(
                au.graphdata_store(
                    vals[i],
                    x,
                    y.flatten(),
                    mode,
                    show_rawlegend,
                    deriv_y.flatten(),
                    deriv_mode,
                    show_derivlegend,
                    fit_y.flatten(),
                    fit_mode,
                    show_fitlegend
                )
            )

            newgraphstyle.append(
                au.graphstyle_store(
                    vals[i],
                    title,
                    mdd.metadata['Name'][len(mdd.metadata['Name']) - 1],
                    ind_var,
                    r2 + param_name.format(*popt),
                    visible
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
         Input('mddcopy', 'data'),
         Input('graphtitles', 'n_blur'),
         Input('xaxistitles', 'n_blur'),
         Input('yaxistitles', 'n_blur'),
         Input('datamodes', 'value'),
         Input('deriv_params', 'data'),
         Input('derivmodes', 'value'),
         Input('fit_iguess', 'data'),
         Input('fitdata', 'value'),
         Input('fitmodes', 'value')],
        [State('graphs', 'children'),
         State('graphs', 'layout'),
         State('graphs', 'maxrows'),
         State('graphdata', 'children'),
         State('graphstyle', 'children'),
         State('metacopy', 'data'),
         State('prev_val', 'data'),
         State('data_headers', 'value'),
         State('graphtitles', 'value'),
         State('xaxistitles', 'value'),
         State('yaxistitles', 'value'),
         State('fit_dropdown', 'value')]
    )
    def create_graphgrid(
        vals, mddcopy,
        ntitle, nxtitle, nytitle, mode,
        deriv, deriv_mode,
        fit_iguess, fitdata, fitmode,
        children, layout, maxrows, graphdata, graphstyle,
        metacopy, prev_vals, ind_var,
        title, xtitle, ytitle,
        fit_dropdown
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
                deriv,
                deriv_mode,
                fit_iguess,
                fitdata,
                fitmode,
                fit_dropdown,
                mddcopy,
                metacopy,
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
                    pd.DataFrame(metacopy)
                )
                mdd.dataDF = pd.DataFrame(mddcopy)

                deriv_array = au.calc_deriv(deriv, mdd)

                if fit_iguess is not None:
                    func, paramname = au.choose_func(fit_dropdown, fit_iguess)

                mode, deriv_mode, fit_mode, visible = au.determine_modes(mode, deriv_mode, fitmode)

                for i in range(len(vals)):
                    children[i]['props']['relayoutData'] = None
                    sing_vals = [int(j) for j in vals[i].split(',')]

                    x = np.asarray(mdd.metadata['Values'].iloc[-1])
                    slice_list = [slice(i, i+1) for i in sing_vals]
                    y = mdd.dataArray[tuple(slice_list)]

                    deriv_y, show_derivlegend = au.find_derivslice(deriv, deriv_array, slice_list)

                    if fit_iguess is None:
                        fit_y, param_name, r2, popt, show_fitlegend = au.empty_fit(x)
                    else:
                        ydata = au.choose_fitdata(fitdata, y, deriv_y)
                        fit_y, param_name, r2, popt, show_fitlegend = au.perform_fit(
                            func, x, ydata, fit_iguess, paramname
                        )

                    show_rawlegend = au.raw_legend(show_fitlegend, show_derivlegend)

                    title = ''
                    for j, name in enumerate(mdd.metadata['Name'][:-1]):
                        title += f'{name}{sing_vals[j]}'

                    graphdata[i] = au.graphdata_store(
                        vals[i],
                        x,
                        y.flatten(),
                        mode,
                        show_rawlegend,
                        deriv_y.flatten(),
                        deriv_mode,
                        show_derivlegend,
                        fit_y.flatten(),
                        fit_mode,
                        show_fitlegend
                    )

                    graphstyle[i] = au.graphstyle_store(
                        vals[i],
                        title,
                        mdd.metadata['Name'][len(mdd.metadata['Name']) - 1],
                        ind_var,
                        r2 + param_name.format(*popt),
                        visible
                    )

            return children, layout, maxrows, graphdata, graphstyle, vals

        else:
            start = time.time()
            mdd = mc.MDD(
                pd.DataFrame(metacopy)
            )
            mdd.dataDF = pd.DataFrame(mddcopy)

            sing_vals = [int(j) for j in vals[-1].split(',')]

            title = ''
            for j, name in enumerate(mdd.metadata['Name'][:-1]):
                title += f'{name}{sing_vals[j]}'

            x = np.asarray(mdd.metadata['Values'].iloc[-1])
            slice_list = [slice(i, i+1) for i in sing_vals]
            y = mdd.dataArray[tuple(slice_list)]

            deriv_array = au.calc_deriv(deriv, mdd)
            deriv_y, show_derivlegend = au.find_derivslice(deriv, deriv_array, slice_list)

            if fit_iguess is None:
                fit_y, param_name, r2, popt, show_fitlegend = au.empty_fit(x)
            else:
                func, param_name = au.choose_func(fit_dropdown, fit_iguess)
                ydata = au.choose_fitdata(fitdata, y, deriv_y)

                fit_y, param_name, r2, popt, show_fitlegend = au.perform_fit(
                    func, x, ydata, fit_iguess, param_name
                )

            show_rawlegend = au.raw_legend(show_fitlegend, show_derivlegend)

            mode, deriv_mode, fit_mode, visible = au.determine_modes(mode, deriv_mode, fitmode)

            children.append(
                dcc.Graph(
                    id={'type': 'linegraph', 'index': vals[-1]},
                    config={'editable': True},
                    style={
                        'height': '95%',
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
                au.graphdata_store(
                    vals[-1],
                    x,
                    y.flatten(),
                    mode,
                    show_rawlegend,
                    deriv_y.flatten(),
                    deriv_mode,
                    show_derivlegend,
                    fit_y.flatten(),
                    fit_mode,
                    show_fitlegend
                )
            )

            graphstyle.append(
                au.graphstyle_store(
                    vals[-1],
                    title,
                    mdd.metadata['Name'][len(mdd.metadata['Name']) - 1],
                    ind_var,
                    r2 + param_name.format(*popt),
                    visible
                )
            )

            return children, layout, maxrows, graphdata, graphstyle, vals