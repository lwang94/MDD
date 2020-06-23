import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH

import bisect
import json
import pandas as pd

import MDDClass as mc
import app_util as au

from sklearn import ensemble as em
from sklearn import model_selection as msl
from sklearn import metrics


def mdd_callbacks(app):

    @app.callback(
        [Output('start_valueslice', 'children'),
         Output('stop_valueslice', 'children'),
         Output('slider_valueslice', 'children')],
        [Input('metadata', 'data')]
    )
    def valueslice_inputs(data):
        start_valueslice_widg = []
        stop_valueslice_widg = []
        slider_valueslice_widg = []
        for i, row in enumerate(data):
            start_valueslice = dcc.Input(
                id={'type': 'start', 'index': i},
                type='text',
                value=row['Values'][0],
                style={
                    # 'backgroundColor': 'transparent',
                    'marginBottom': 12,
                    'width': 50
                }
            )

            stop_valueslice = dcc.Input(
                id={'type': 'stop', 'index': i},
                type='text',
                value=row['Values'][-1],
                style={
                    # 'backgroundColor': 'transparent',
                    'marginBottom': 12,
                    'width': 50
                }
            )


            slider_valueslice = html.Div(
                dcc.RangeSlider(
                    id={'type': 'slider', 'index': i},
                    min=row['Values'][0],
                    max=row['Values'][-1],
                    marks={j: '' for j in row['Values']},
                    step=None,
                    value=[row['Values'][0], row['Values'][-1]]
                ),
                style={
                    'marginBottom': 11
                }
            )

            start_valueslice_widg.append(start_valueslice)
            stop_valueslice_widg.append(stop_valueslice)
            slider_valueslice_widg.append(slider_valueslice)
        return start_valueslice_widg, stop_valueslice_widg, slider_valueslice_widg

    @app.callback(
        Output({'type': 'slider', 'index': MATCH}, 'value'),
        [Input({'type': 'start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'start', 'index': MATCH}, 'value'),
         State({'type': 'stop', 'index': MATCH}, 'value')]
    )
    def update_slider(nstart, nstop, start, stop):
        if nstart is not None or nstop is not None:
            value = [float(start), float(stop)]
            return value

    @app.callback(
        [Output({'type': 'start', 'index': MATCH}, 'value'),
         Output({'type': 'stop', 'index': MATCH}, 'value')],
        [Input({'type': 'slider', 'index': MATCH}, 'value')]
    )
    def update_startstop(sliderval):
        return sliderval[0], sliderval[1]


    # Create and add data to mdd
    @app.callback(
        Output('mdd', 'data'),
        [Input('metadata', 'data'),
         Input('add_data', 'contents')], # CAN'T REUPLOAD SAME FILES (GOOGLE FOR DEBUG SOLUTION LATER)
        [State('mdd', 'data'),
         State('start_valueslice', 'children'),
         State('stop_valueslice', 'children'),
         State('data_headers', 'value')]
    )
    def create_mdd(
        meta, add_data,
        mdd_state, start_valueslice, stop_valueslice,
        data_headers
    ):
        meta = pd.DataFrame(meta)
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'metadata.data':
            mdd = mc.MDD(
                meta
            )
            return mdd.dataDF.to_dict('records')

        else:
            mdd = mc.MDD(
                meta
            )
            mdd.dataDF = pd.DataFrame(mdd_state)

            headers = data_headers.split(',')
            data = au.load_data(add_data, usecols=headers)

            indices = {}
            for i in range(len(start_valueslice)):
                ax = meta['Axis'][i]
                start = start_valueslice[i]['props']['value']
                stop = stop_valueslice[i]['props']['value']

                indices[ax] = (start, stop)

            mdd.add_data(data, indices)
            return mdd.dataDF.to_dict('records')

    @app.callback(
        [Output('slice_table', 'columns'),
         Output('slice_table', 'data')],
        [Input('metadata', 'data')]
    )
    def create_slicetables(metadata):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
            .to_dict('records')
        )
        columns = [
            {'name': '', 'id': 'slice', 'type': 'text', 'editable': False}
        ]
        filters = []
        for i in range(len(meta)):
            col = {'name': f'{meta[i]["Name"]}', 'id': f'slice_{meta[i]["Name"]}', 'type': 'numeric'}
            columns.append(col)



        data_start = {f'slice_{meta[i]["Name"]}': meta[i]['Values'][0] for i in range(len(meta))}
        data_start['slice'] = 'Start'

        data_stop = {f'slice_{meta[i]["Name"]}': meta[i]['Values'][-1] for i in range(len(meta))}
        data_stop['slice'] = 'Stop'

        data = [data_start, data_stop]

        return columns, data


    @app.callback(
        [Output('slice_validation', 'children'),
         Output('slice_indices', 'data'),
         Output('slice_table', 'style_data_conditional')],
        [Input('slice_table', 'data')],
        [State('metadata', 'data')]
    )
    def validate_slice(data, metadata):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
        )
        message = ''
        indices = {}
        sdc = []
        for name in meta['Name']:
            valid_vals = meta.loc[meta['Name'] == name]['Values'].array[0]
            start = data[0][f'slice_{name}']
            start_ind = bisect.bisect_left(valid_vals, start)
            if start_ind >= len(valid_vals):
                start_ind = len(valid_vals) - 1

            stop = data[1][f'slice_{name}']
            stop_ind = bisect.bisect_left(valid_vals, stop)
            if stop_ind < start_ind:
                stop_ind = start_ind + 1
            if stop_ind >= len(valid_vals):
                stop_ind = len(valid_vals) - 1

            indices[f'{name}'] = [start_ind, stop_ind]
            if valid_vals[start_ind] != start:
                message += f'WARNING:{start} is an invalid start value for {name}, using {valid_vals[start_ind]} instead\n'
                sdc.append({
                    'if': {
                        'column_id': f'slice_{name}',
                        'row_index': 0
                    },
                    'backgroundColor': '#FF0000',
                    'color': 'white'
                })
            if valid_vals[stop_ind] != stop:
                message += f'WARNING: {stop} is an invalid stop value for {name}, using {valid_vals[stop_ind]} instead\n'
                sdc.append({
                    'if': {
                        'column_id': f'slice_{name}',
                        'row_index': 1
                    },
                    'backgroundColor': '#FF0000',
                    'color': 'white'
                })
        return message, indices, sdc

    @app.callback(
        [Output('moveaxis', 'children'),
        Output('moveaxis', 'layout'),
        Output('moveaxis', 'divstyle'),
        Output('moveaxis', 'maxrows'),
        Output('moveaxis', 'numcolumns')],
        [Input('metadata', 'data')]
    )
    def create_moveaxis(metadata):
        meta = (
            pd.DataFrame(metadata)
            .sort_values(by=['Axis'], ignore_index=True)
            .to_dict('records')
        )
        divstyle = {
            'borderRadius': '10px',
            'backgroundColor': '#33DEF0',
            'textAlign': 'center'
        }
        items = [meta[i]['Name'] for i in range(len(meta))]
        keys = [f'axis_{i}' for i in range(len(meta))]

        nrows = len(meta) // 6 + 1
        ncolumns = 6
        if len(meta) % 6 == 0:
            nrows = len(meta) // 6
        if len(meta) // 6 == 0:
            ncolumns = len(meta) % 6

        layout = au.define_draggrid(
            nrows,
            ncolumns,
            keys,
            isResizable=False
        )

        return items, layout, divstyle, nrows, ncolumns


    # TESTING MDD, DELETE LATER
    @app.callback(
        Output('check', 'children'),
        [Input('checkbutton', 'n_clicks')],
        [State('mdd', 'data'),
         State('metadata', 'data')]
    )
    def check(button, mddstate, meta):
        if button > 0:
            # mdd = mc.MDD(
            #     pd.DataFrame(meta)
            # )
            # mdd.dataDF = pd.DataFrame(mddstate)
            mdd = mc.read_json_pair(mddstate)

            mdd.create_training()
            model = em.RandomForestRegressor(max_features=len(mdd.trainX.columns)//3, random_state=42, verbose=20)

            trainX, testX, trainY, testY = msl.train_test_split(mdd.trainX, mdd.trainY, test_size=0.2, random_state=42)

            model.fit(trainX, trainY)
            print('finished training')

            # print(model.score(testX, testY))

            # print(testX.head(3))
            # print(testY.head(3))
            # print(model.predict(testX.head(3)))


            pred = model.predict(testX)
            mae = metrics.mean_absolute_error(testY, pred)
            print(mae)

            # mdd.create_training()
            # print(mdd.trainX)
            # mdd.train_model()
            # print('finished training')

            # test_set = mdd.dataDF[mdd.dataDF.isnull().any(axis=1)]
            # testX = test_set.drop(['y'], axis=1)
            # testX = mc.generate_features(testX)

            # # testY = testX['x1'] + 2 * testX['x2'] ** 2 + 4 * testX['x3'] # EASY ML
            # testY = (testX['x1'] / testX['x2'] + testX['x2'] * (testX['x1'] + testX['x3']) ** 2) / mdd.dataDF['y'].max() # ML
            # # testY = testX['x3'] * testX['x2'] ** 2 # EXPERIMENTAL

            # print(testX)
            # print(testY)

            # print(mdd.model.score(testX, testY))

            # EASY ML
            # data = {
            #     'x1': [2, 2, 2],
            #     'x2': [1, 1, 3],
            #     'x3': [9, 402, 274]
            # }
            # EXPECT: 40, 1612, 1116

            # ML
            # data = {
            #     'x1': [2, 2, 2],
            #     'x2': [1, 1, 3],
            #     'x3': [2, 139, 96]
            # }
            # EXPECT: 18, 19883, 28812

            # EXPERIMENTAL
            # data = {
            #     'x1': [3, 3, 3],
            #     'x2': [5, 5, 5],
            #     'x3': [2, 50, 250]
            # }

            # df = pd.DataFrame(data, columns=['x1', 'x2', 'x3'])
            # print(df)
            # df = mc.generate_features(df)

            # pred = mdd.model.predict(df)
            # print(pred)
