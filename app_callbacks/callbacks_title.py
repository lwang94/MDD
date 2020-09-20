from dash.dependencies import Input, Output, State

import base64 
import io

import pandas as pd 

import config as cf


def title_callbacks(app):

    # Display error message when relevant
    @app.callback(
        [Output('error_message', 'displayed'),
         Output('error_message', 'message')],
        [Input('load', 'data'),
         Input('metadata', 'data'),
         Input('metadata_table', 'data')]
    )
    def display_error(load, metadata, metatable):
        # if load data resulted in ERROR
        if type(load) == str: 
            return True, load

        # if creating metadata resulted in ERROR
        if type(metadata) == str:
            return True, metadata

        # otherwise, don't show error message
        return False, ''
    
    # Read loaded .csv file as DataFrame and store it
    @app.callback(
        Output('load', 'data'),
        [Input('load_data', 'contents')],
        [State('load_data', 'filename')]
    )
    def store_loaddata(contents, filename):
        # ensure uploaded file is .csv
        if filename[-4:] != '.csv':
            return cf.error_csv
        
        # read file
        content_string = contents.split(',')[1]
        decoded_string = base64.b64decode(content_string)
        data_string = io.StringIO(decoded_string.decode('utf-8'))
        
        df = pd.read_csv(data_string)

        # store file
        return df.to_dict('records')

    # Empty load contents so that same file can be uploaded repeatedly
    @app.callback(
        [Output('load_data', 'contents'),
         Output('load_data', 'filename')],
        [Input('load_data_button', 'n_clicks')]
    )
    def empty_loaddata(nclicks):
        if nclicks > 0:
            return None, None
