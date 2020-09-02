import dash
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH
from dash.exceptions import PreventUpdate
import flask

import bisect
import json
import pandas as pd
import base64

from io import BytesIO
import zipfile
import urllib

import MDDClass as mc
import app_util as au


def mdd_callbacks(app):

    @app.callback(
        [Output('start_dataslice', 'children'),
         Output('stop_dataslice', 'children'),
         Output('slider_dataslice', 'children'),
         Output('data_validvals', 'children')],
        [Input('metadata', 'data')]
    )
    def dataslice_inputs(metadata):
        data_start = []
        data_stop = []
        data_slider = []
        data_valid = []
        print(metadata)
        for i, row in enumerate(metadata):
            data_start.append(
                dcc.Input(
                    id={'type': 'data_start', 'index': i},
                    type='text',
                    value=row['Values'][0],
                    style={
                        'marginBottom': 12,
                        'width': 50
                    }
                )
            )

            data_stop.append(
                dcc.Input(
                    id={'type': 'data_stop', 'index': i},
                    type='text',
                    value=row['Values'][-1],
                    style={
                        'marginBottom': 12,
                        'width': 50
                    }
                )
            )


            data_slider.append(
                html.Div(
                    dcc.RangeSlider(
                        id={'type': 'data_slider', 'index': i},
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
            )

            data_valid.append(
                dcc.Store(
                    id={'type': 'data_valid', 'index': i},
                    data=row['Values']
                )
            )

        return data_start, data_stop, data_slider, data_valid

    @app.callback(
        Output({'type': 'data_slider', 'index': MATCH}, 'value'),
        [Input({'type': 'data_start', 'index': MATCH}, 'n_blur'),
         Input({'type': 'data_stop', 'index': MATCH}, 'n_blur')],
        [State({'type': 'data_start', 'index': MATCH}, 'value'),
         State({'type': 'data_stop', 'index': MATCH}, 'value'),
         State({'type': 'data_valid', 'index': MATCH}, 'data')]
    )
    def update_dataslider(nstart, nstop, start, stop, validval):
        if nstart is not None or nstop is not None:
            try:
                start_ind = bisect.bisect_left(validval, float(start))
                stop_ind = bisect.bisect_left(validval, float(stop))

                if start_ind >= len(validval):
                    start_ind = len(validval) - 1
                if stop_ind >= len(validval):
                    stop_ind = len(validval) - 1
                if stop_ind < start_ind:
                    stop_ind = start_ind

                start = validval[start_ind]
                stop = validval[stop_ind]
                value = [start, stop]
                return value
            except:
                raise PreventUpdate

    @app.callback(
        [Output({'type': 'data_start', 'index': MATCH}, 'value'),
         Output({'type': 'data_stop', 'index': MATCH}, 'value')],
        [Input({'type': 'data_slider', 'index': MATCH}, 'value')]
    )
    def update_datastartstop(sliderval):
        return sliderval[0], sliderval[1]

    @app.callback(
        Output('add_data', 'contents'),
        [Input('add_data_button', 'n_clicks')]
    )
    def clear_add_data_component(nclicks):
        if nclicks > 0:
            return ''

    # Create and add data to mdd
    @app.callback(
        [Output('mdd', 'data'),
         Output('graphparam_confirm', 'n_clicks')],
        [Input('metadata', 'data'),
         Input('load', 'contents'),
         Input('add_data', 'contents')],
        [State('mdd', 'data'),
         State('start_dataslice', 'children'),
         State('stop_dataslice', 'children'),
         State('data_headers', 'value'),
         State('graphparam_confirm', 'n_clicks')]
    )
    def create_mdd(
        meta, load, add_data,
        mdd_state, start_dataslice, stop_dataslice,
        data_headers, nclicks
    ):
        meta = pd.DataFrame(meta)
        ctx = dash.callback_context
        if ctx.triggered[-1]['prop_id'] == 'metadata.data':
            if ctx.triggered[0]['prop_id'] == 'load.contents':
                load = load.split(',')[1]
                decoded = base64.b64decode(load)
                zip_str = BytesIO(decoded)
                zip_obj = zipfile.ZipFile(zip_str, 'r')

                mdd_csv = zip_obj.read('mdd.csv')
                mdd = pd.read_csv(BytesIO(mdd_csv))
                return mdd.to_dict('records'), nclicks
            else:
                mdd = mc.MDD(meta)
                return mdd.dataDF.to_dict('records'), nclicks + 1

        elif (
            ctx.triggered[-1]['prop_id'] == 'add_data.contents'
            and add_data is not ''
        ):
            mdd = mc.MDD(
                meta
            )
            mdd.dataDF = pd.DataFrame(mdd_state)

            headers = data_headers.split(',')
            data = au.load_data(add_data, usecols=headers)

            indices = {}
            for i in range(len(start_dataslice)):
                ax = meta['Axis'][i]
                start = start_dataslice[i]['props']['value']
                stop = stop_dataslice[i]['props']['value']

                indices[ax] = (start, stop)

            mdd.add_data(data, indices)
            return mdd.dataDF.to_dict('records'), nclicks + 1
        else:
            raise PreventUpdate


    @app.callback(
        Output('save', 'href'),
        [Input('mdd', 'data')],
        [State('metadata', 'data')]
    )
    def update_savelink(mdd, meta):
        return f'/dash/urlToDownload?mdd={mdd}&meta={meta}'

    @app.server.route('/dash/urlToDownload')
    def download_zip():
        mdd = eval(flask.request.args.get('mdd'))
        meta = eval(flask.request.args.get('meta'))

        mdd = pd.DataFrame(mdd)
        meta = pd.DataFrame(meta)

        memory_file = BytesIO()
        with zipfile.ZipFile(memory_file, 'w') as zf:
            zf.writestr('mdd.csv', mdd.to_csv(index=False))
            zf.writestr('meta.csv', meta.to_csv(index=False))
        memory_file.seek(0)
        return flask.send_file(memory_file, attachment_filename='mdd.zip', as_attachment=True)

    # @app.callback(
    #     Output('temp', 'data'),
    #     [Input('load', 'contents')]
    # )
    # def load_mdd(contents):
    #     content_string = contents.split(',')[1]
    #     content_decoded = base64.b64decode(content_string)
    #     zip_str = BytesIO(content_decoded)
    #     zip_obj = zipfile.ZipFile(zip_str, 'r')

    #     mdd_csv = zip_obj.read('mdd.csv')
    #     mdd = pd.read_csv(BytesIO(mdd_csv))
    #     print(mdd)

