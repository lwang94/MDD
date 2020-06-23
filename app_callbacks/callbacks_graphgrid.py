from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
from dash.exceptions import PreventUpdate
import plotly.graph_objects as go

import pandas as pd

import MDDClass as mc
import app_util as au


def graphgrid_callbacks(app):

    # TO DO: Rewrite this entire function knowing that it will only update one value at a time
    # @app.callback(
    #     [Output('graphs', 'children'),
    #      Output('graphs', 'layout'),
    #      Output('graphs', 'divstyle'),
    #      Output('graphs', 'maxrows'),
    #      Output('graphs', 'numcolumns')],
    #     [Input('graph_params', 'value')],
    #     [State('mdd', 'data'),
    #      State('lastslice', 'data'),
    #      State('metadata', 'data'),
    #      State('moveaxis', 'layout'),
    #      State('graphs', 'children'),
    #      State('graphs', 'layout'),
    #      State('graphs', 'maxrows')]
    # )
    # def create_layout(
    #     vals, mdd_data, lastslice,
    #     metadata, moveaxis, old_graphs, layout, prev_rows
    # ):
    #     if len(vals) == 0:
    #         raise ValueError('No values found')
    #     if layout is None:
    #         layout = []

    #     mdd = mc.MDD(
    #         pd.DataFrame(metadata)
    #     )
    #     mdd.dataDF = pd.DataFrame(mdd_data)

    #     mdd.move_axis(au.new_pos(moveaxis))

    #     old_layout = {layout[i]['i']: i for i in range(len(layout))}
    #     graphs = []
    #     old_lay = []
    #     new_keys = []
    #     for i in range(len(vals)):
    #         val = vals[i].split(',')
    #         sing_vals = [int(j) for j in val]
    #         last_vals = [int(j) for j in lastslice.split(':')]

    #         title = ''
    #         for j, name in enumerate(mdd.metadata['Name'][:-1]):
    #             title += f'{name}{sing_vals[j]}'

    #         if vals[i] in old_layout:
    #             old_lay.append(layout[old_layout[vals[i]]])
    #         else:
    #             new_keys.append(vals[i])

    #         x = mdd.metadata['Values'].iloc[-1][last_vals[0]:last_vals[1]]
    #         slice_list = [slice(i, i+1) for i in sing_vals] + [slice(last_vals[0], last_vals[1])]
    #         y = mdd.dataArray[tuple(slice_list)]

    #         graphs.append(
    #             html.Div(
    #                 id={'type': 'graphdiv', 'index': vals[i]},
    #                 children=[
    #                     dcc.Graph(
    #                         id={'type': 'linegraph', 'index': vals[i]},
    #                         config={'editable': True},
    #                         style={
    #                             'height': '100%',
    #                             'width': '100%'
    #                         }
    #                     ),
    #                     dcc.Store(
    #                         id={'type': 'linegraph_data', 'index': vals[i]},
    #                         data=[{
    #                             'x': x,
    #                             'y': y.flatten(),
    #                             'mode': 'lines+markers'
    #                         }]
    #                     ),
    #                     dcc.Store(
    #                         id={'type': 'linegraph_lay', 'index': vals[i]},
    #                         data={'title': title}
    #                     )
    #                 ]
    #             )
    #         )

    #     spacing = 8
    #     nrows = (len(vals) // 3 + 1) * spacing
    #     if len(vals) % 3 == 0:
    #         nrows = (len(vals) // 3) * spacing
    #     ncolumns = 30

    #     if prev_rows is None:
    #         prev_rows = 0

    #     new_layout = au.define_draggrid(
    #         1,
    #         1,
    #         new_keys,
    #         w=ncolumns,
    #         h=spacing,
    #         start_row=prev_rows,
    #         spacex=spacing,
    #         spacey=spacing
    #     )
    #     divstyle = {
    #         'borderStyle': 'solid'
    #     }

    #     return graphs, old_lay + new_layout, divstyle, prev_rows + nrows, ncolumns

    @app.callback(
        [Output('graphs', 'children'),
         Output('graphs', 'layout'),
         Output('graphs', 'maxrows'),
         Output('prev_val', 'data')],
        [Input('graph_params', 'value')],
        [State('graphs', 'children'),
         State('graphs', 'layout'),
         State('graphs', 'maxrows'),
         State('mdd', 'data'),
         State('metadata', 'data'),
         State('moveaxis', 'layout'),
         State('lastslice', 'data'),
         State('prev_val', 'data')]
    )
    def create_graphgrid(
        vals, children, layout, maxrows,
        mdd_data, metadata, moveaxis, lastslice,
        prev_vals
    ):
        if len(vals) == len(prev_vals):
            raise PreventUpdate
        elif len(vals) < len(prev_vals):
            remove = list(set(prev_vals) - set(vals))
            lay_keys = {layout[i]['i']: i for i in range(len(layout))}

            children.pop(lay_keys[remove[0]])
            layout.pop(lay_keys[remove[0]])

            return children, layout, maxrows, vals
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
                html.Div(
                    id={'type': 'graphdiv', 'index': vals[-1]},
                    children=[
                        dcc.Graph(
                            id={'type': 'linegraph', 'index': vals[-1]},
                            config={'editable': True},
                            style={
                                'height': '100%',
                                'width': '100%'
                            }
                        ),
                        dcc.Store(
                            id={'type': 'linegraph_data', 'index': vals[-1]},
                            data=[{
                                'x': x,
                                'y': y.flatten(),
                                'mode': 'lines+markers'
                            }]
                        ),
                        dcc.Store(
                            id={'type': 'linegraph_lay', 'index': vals[-1]},
                            data={'title': title}
                        )
                    ]
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

            return children, layout, maxrows, vals