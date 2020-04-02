import dash
import dash_table as dt
import dash_core_components as dcc
import dash_daq as daq
import dash_html_components as html
from dash.dependencies import Input, Output, State

import pandas as pd
import math as math
import numpy as np

import mdd
import app_layout as al
import app_util as au
import app_changedata as acd

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

app.layout = al.app_layout()


@app.callback(
    Output('mddata', 'children'),
    [Input('metadata', 'children'),
     Input('add_values', 'contents')],
    [State('mddata', 'children'),
     State('axis_inputs', 'children'),
     State('value_header', 'value')]
)
def manipulate_mddata(
    metadata, add_value,
    mddata_state, axis_inputs, value_header
):
    ctx = dash.callback_context
    if ctx.triggered[-1]['prop_id'] == 'metadata.children':
        return acd.create_mddata(metadata)
    elif ctx.triggered[-1]['prop_id'] == 'add_values.contents':
        return acd.add_data(mddata_state, add_value, axis_inputs, value_header)


@app.callback(
    Output('axis_inputs', 'children'),
    [Input('metadata', 'children')]
)
def get_axis_inputs(data):
    data = pd.read_json(data, orient='split').to_dict('records')
    axis_input_list = []
    for i, row in enumerate(data):
        axis_input=html.Div(
            children=
            [
                dcc.Input(
                    id=f'{i}_start',
                    type='text',
                    value=row['Axis'][0],
                    style={
                        'marginBottom': 12,
                        'marginRight': 10,
                        'width': 50
                    }
                ),
                dcc.Input(
                    id=f'{i}_stop',
                    type='text',
                    value=row['Axis'][-1],
                    style={
                        'marginBottom': 12,
                        'width': 50
                    }
                )
            ],
            id=f'{data[i]["Dimension"]}_input'
        )
        axis_input_list.append(axis_input)
    return axis_input_list


@app.callback(
    Output('metadata', 'children'),
    [Input('confirm_axis', 'n_clicks')],
    [State('axis_methods', 'children'),
     State('metadata_table', 'data')]
)
def define_axes(n_clicks, children, data):
    """rewrite this to also handle the many exceptions that can occur
    eg. not .csv, can't find column in upload, Range/Custom Inputs not formatted correctly,
    strings in Range/Custom Inputs missing values in DataTable etc."""
    if n_clicks > 0:
        df = pd.DataFrame(data)
        axis_col = []
        for i, row in enumerate(data):
            if row['Method'] == 'Upload':
                axis = au.load_data(
                    au.get_axis_info(children[i])['contents'],
                    usecols=[row['Name']]
                ).tolist()
            elif row['Method'] == 'Range':
                start, stop = au.get_axis_info(children[i])['value'].split(',')
                start, stop = float(start), float(stop)
                axis = np.linspace(start, stop, num=int(row['Num Values']))
                axis = axis.tolist()
            else:
                axis = [float(j) for j in au.get_axis_info(children[i])['value'].split(',')]
            axis_col.append(axis)
        df['Axis'] = axis_col
        return df.to_json(orient='split')


@app.callback(
    Output('axis_graduated_bars', 'children'),
    [Input('metadata_table', 'data')],
    [State('axis_graduated_bars', 'children')]
)
def get_axis_gb(data, agb):
    gb_list = []
    if agb is None:
        for i in range(3):
            gb_list.append(
                html.Div(
                    daq.GraduatedBar(
                        id=f'{i}_GB0',
                        max=0,
                        size=675
                    ),
                    style={'marginBottom': 20}
                )
            )
        return gb_list
    else:
        for i, row in enumerate(data):
            n_values = min(300, row['Num Values'])
            gb = html.Div(
                daq.GraduatedBar(
                    id=f'{i}_GB{row["Num Values"]}',
                    max=n_values,
                    step=1,
                    value=n_values,
                    size=675
                ),
                style={'marginBottom': 20}
            )
            gb_list.append(gb)
        return gb_list


@app.callback(
    Output('axis_methods', 'children'),
    [Input('metadata_table', 'data')],
    [State('axis_methods', 'children')]
)
def method_widgets(data, axis_meth):
    children=[]
    if axis_meth is None:
        for i in range(3):
            children.append(
                html.Div(
                    dcc.Upload(
                        id=f'{i}_UploadNone',
                        children=html.Button('Upload'),
                        style={'marginBottom': 12},
                        multiple=True
                    )
                )
            )
        return children

    else:
        for i, row in enumerate(data):
            if row['Method'] == 'Upload':
                widget = html.Div(
                            dcc.Upload(
                                id=f'{i}_Upload{row["Num Values"]}',
                                children=html.Button('Upload'),
                                style={'marginBottom': 12},
                                multiple=True
                            )
                        )
            elif row['Method'] == 'Range':
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

            # check if axis has already been defined
            if 0 <= i < len(axis_meth) and widget.children.id == au.get_axis_info(axis_meth[i])['id']:
                widget = axis_meth[i]

            children.append(widget)

    return children


@app.callback(
    Output('metadata_table', 'data'),
    [Input('add_rows', 'n_clicks')],
    [State('metadata_table', 'data'),
     State('metadata_table', 'columns')]
)
def add_row(n_clicks, rows, columns):
    if n_clicks > 0:
        rows.append({
            'Dimension': math.nan,
            'Name': '',
            'Num Values': 0,
            'Method': 'Upload'
        })
    return rows


if __name__ == '__main__':
    app.run_server(debug=True)