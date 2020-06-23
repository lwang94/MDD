import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State, MATCH

import pandas as pd
import math as math
import numpy as np

import app_util as au
import config as cf


def initial_metadata_check(df):
    """
    Perform initial checks on metadata table to
    ensure values have been inputted properly.
    Only looks at Axis and Name columns.
    """
    # check if Axis numbers was inputted correctly
    # expect sorted Axis value should be the same as its index
    ax_check = sorted(df['Axis'])
    for i, ax in enumerate(ax_check):
        if ax != i + 1:
            return cf.error_axislength

    # ensure Names are unique
    if df['Name'].is_unique is False:
        return cf.error_uniquenames

    # passed all checks
    return None


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
        for i, row in enumerate(data):
            # create upload button if Define Values is Upload
            if row['Define Values'] == 'Upload':
                widget = html.Div(
                            dcc.Upload(
                                id={'type': 'upload', 'index': i},
                                children=html.Button(
                                    id={'type': 'uploadbutton', 'index': i}
                                ),
                                style={'marginBottom': 12},
                                multiple=True
                            )
                        )

            # create input box if Define Values is Range
            elif row['Define Values'] == 'Range':
                widget = html.Div(
                        dcc.Input(
                            id={'type': 'range', 'index': i},
                            placeholder='Start, Stop',
                            type='text',
                            debounce=True,
                            style={
                                'background': 'transparent',
                                'border': '1px solid',
                                'marginBottom': 12,
                                'width': 115
                            }
                        )
                    )

            # create input box if Define Values is Custom
            else:
                widget = html.Div(
                        dcc.Input(
                            id={'type': 'custom', 'index': i},
                            placeholder='value1, value2,...',
                            type='text',
                            debounce=True,
                            style={
                                'background': 'transparent',
                                'border': '1px solid',
                                'marginBottom': 12,
                                'width': 115
                            }
                        )
                    )

            # check if value has already been defined
            if (
                0 <= i < len(defval_methods) and
                widget.children.id == au.get_axis_info(defval_methods[i])['id']
            ):
                widget = defval_methods[i]

            defval.append(widget)

        return defval

    # Change upload button style if contents uploaded
    @app.callback(
        [Output({'type': 'uploadbutton', 'index': MATCH}, 'children'),
         Output({'type': 'uploadbutton', 'index': MATCH}, 'style')],
        [Input({'type': 'upload', 'index': MATCH}, 'filename')]
    )
    def upload_confirm(fname):
        if fname is None:
            return 'Upload', {'border': '1px solid'}
        else:
            return fname, {'border': '2px solid #607D8B'}

    # Define values from methods (also checks inputs formatted correctly)
    # Generates final metadata json
    @app.callback(
        Output('metadata', 'data'),
        [Input('confirm_values', 'n_clicks')],
        [State('defval_methods', 'children'),
         State('metadata_table', 'data')]
    )
    def define_values(n_clicks, defval_methods, data):
        """
        Consider clarifying error messages
        Throw error message (always start message with ERROR:)
        when encountering incorrect inputs
        """
        if n_clicks > 0:
            # create metadata DataFrame
            df = pd.DataFrame(data)

            # check first two columns have been inputted correctly
            if initial_metadata_check(df) is not None:
                return initial_metadata_check(df)

            # start adding values
            values = []
            for i, row in enumerate(data):
                if row['Define Values'] == 'Upload':
                    try:
                        # check if uploaded files are .csv files
                        csvfiles = au.get_axis_info(
                            defval_methods[i]
                        )['filename']

                        for csvfile in csvfiles:
                            if csvfile.split('.')[-1] != 'csv':
                                return cf.error_csv

                        # get value from .csv
                        value = au.load_data(
                            au.get_axis_info(defval_methods[i])['contents'],
                            usecols=[row['Name']]
                        ).tolist()

                    # exception if no file was uploaded
                    except KeyError:
                        return cf.error_noupload

                    # exception if Name cannot be found in file
                    except ValueError:
                        return f'ERROR: {row["Name"]} header in file not found'

                elif row['Define Values'] == 'Range':
                    try:
                        # create evenly spaced list of values based on inputs
                        inputs = au.get_axis_info(
                            defval_methods[i]
                        )['value'].split(',')

                        start, stop = inputs
                        start, stop = float(start), float(stop)
                        value = np.linspace(
                            start,
                            stop,
                            num=int(row['Num Values'])
                        )
                        value = value.tolist()

                    # exception if no range was inputted
                    except KeyError:
                        return cf.error_norange

                    # exception if range inputted incorrectly
                    except ValueError:
                        return cf.error_rangeval
                else:
                    try:
                        # recreate given list of numeric values
                        value = [
                            float(j) for j in
                            au.get_axis_info(
                                defval_methods[i]
                            )['value'].split(',')
                        ]

                    # exception if no custom inputs were given
                    except KeyError:
                        return cf.error_nocustom

                    # exception if custom inputs not inputted correctly
                    except ValueError:
                        return cf.error_customval

                # ensure values are unique, sorted, and have the correct amount
                value = sorted(set(value))
                if len(value) != row['Num Values']:
                    return (
                        f'ERROR: Number of row {i + 1} values'
                        + ' does not match Num Values'
                    )

                values.append(value)

            # add values to Values columns
            df['Values'] = values

            # return entire metadata json
            return df.to_dict('records')

    # Display error message when relevant
    @app.callback(
        [Output('error_message', 'displayed'),
         Output('error_message', 'message')],
        [Input('metadata', 'data')]
    )
    def display_error(metadata):
        if type(metadata) == str:
            return True, metadata
        return False, ''
