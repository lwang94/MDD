import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State

import pandas as pd
import math as math
import numpy as np

import app_util as au
import config as cf


def metadata_callbacks(app):


    # Add new row to metadata table
    @app.callback(
        Output('metadata_table', 'data'),
        [Input('add_rows', 'n_clicks')],
        [State('metadata_table', 'data'),
        State('metadata_table', 'columns')]
    )
    def add_row(n_clicks, rows, columns):
        if n_clicks > 0:
            rows.append({
                'Axis': math.nan,
                'Name': '',
                'Num Values': 0,
                'Define Values': 'Upload'
            })
        return rows


    # Create widgets for defining values
    @app.callback(
        Output('defval_methods', 'children'),
        [Input('metadata_table', 'data')],
        [State('defval_methods', 'children')]
    )
    def define_value_methods(data, defval_methods):
        defval = []
        if defval_methods is None:
            for i in range(3):
                defval.append(
                    html.Div(
                        dcc.Upload(
                            id=f'{i}_UploadNone',
                            children=html.Button('Upload'),
                            style={'marginBottom': 12},
                            multiple=True
                        )
                    )
                )
            return defval

        else:
            for i, row in enumerate(data):
                if row['Define Values'] == 'Upload':
                    widget = html.Div(
                                dcc.Upload(
                                    id=f'{i}_Upload{row["Num Values"]}',
                                    children=html.Button('Upload'),
                                    style={'marginBottom': 12},
                                    multiple=True
                                )
                            )
                elif row['Define Values'] == 'Range':
                    widget = html.Div(
                            dcc.Input(
                                id=f'{i}_Range{row["Num Values"]}',
                                placeholder='Start, Stop',
                                type='text',
                                debounce=True,
                                style={'marginBottom': 12, 'width': 115}
                            )
                        )
                else:
                    widget = html.Div(
                            dcc.Input(
                                id=f'{i}_Custom{row["Num Values"]}',
                                placeholder='value1, value2,...',
                                type='text',
                                debounce=True,
                                style={'marginBottom': 12, 'width': 115}
                            )
                        )

                # check if value has already been defined
                if 0 <= i < len(defval_methods) and widget.children.id == au.get_axis_info(defval_methods[i])['id']:
                    widget = defval_methods[i]

                defval.append(widget)

            return defval


    # Define values from methods
    @app.callback(
        Output('metadata', 'children'),
        [Input('confirm_values', 'n_clicks')],
        [State('defval_methods', 'children'),
         State('metadata_table', 'data')]
    )
    def define_values(n_clicks, defval_methods, data):
        """rewrite this to also handle the many exceptions that can occur
        eg. not .csv, can't find column in upload, Range/Custom Inputs not formatted correctly,
        strings in Range/Custom Inputs missing values in DataTable etc."""
        if n_clicks > 0:

            ax_check1 = sorted([d['Axis'] for d in data])
            ax_check2 = [(i + 1) for i in range(len(data))]
            if ax_check1 != ax_check2:
                return cf.error_axislength

            df = pd.DataFrame(data)
            values = []
            for i, row in enumerate(data):
                if row['Define Values'] == 'Upload':
                    # check if uploaded files are .csv files
                    for csvfile in au.get_axis_info(defval_methods[i])['filename']:
                        if csvfile.split('.')[-1] != 'csv':
                            return cf.error_csv
                    try:
                        value = au.load_data(
                            au.get_axis_info(defval_methods[i])['contents'],
                            usecols=[row['Name']]
                        ).tolist()
                    except ValueError:
                        return cf.error_uploadheader

                elif row['Define Values'] == 'Range':
                    start, stop = au.get_axis_info(defval_methods[i])['value'].split(',')
                    try:
                        start, stop = float(start), float(stop)
                        value = np.linspace(start, stop, num=int(row['Num Values']))
                        value = value.tolist()
                    except ValueError:
                        return cf.error_rangeval
                else:
                    try:
                        value = [
                            float(j) for j in
                            au.get_axis_info(defval_methods[i])['value'].split(',')
                        ]
                    except ValueError:
                        return cf.error_customval

                if len(value) != row['Num Values']:
                    return cf.error_numval
                values.append(value)

            df['Values'] = values
            return df.to_json(orient='split')


    @app.callback(
        [Output('error_message', 'displayed'),
         Output('error_message', 'message')],
        [Input('metadata', 'children')]
    )
    def display_error(metadata):
        if metadata.split(':')[0] == 'ERROR':
            return True, metadata
        return False, ''