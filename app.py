import dash

import app_layout as al
from callbacks_metadata import metadata_callbacks
from callbacks_mdd import mdd_callbacks

app = dash.Dash(__name__)
app.config.suppress_callback_exceptions = True

app.layout = al.app_layout()
metadata_callbacks(app)
mdd_callbacks(app)


# @app.callback(
#     Output('mdd', 'children'),
#     [Input('metadata', 'children'),
#      Input('add_values', 'contents')],
#     [State('mdd', 'children'),
#      State('valueslice', 'children'),
#      State('value_header', 'value')]
# )
# def manipulate_mdd(
#     metadata, add_value,
#     mdd_state, valueslice, value_header
# ):
#     ctx = dash.callback_context
#     if ctx.triggered[-1]['prop_id'] == 'metadata.children':
#         return acd.create_mdd(metadata)
#     elif ctx.triggered[-1]['prop_id'] == 'add_values.contents':
#         return acd.add_data(mdd_state, add_value, valueslice, value_header)


# @app.callback(
#     Output('valueslice', 'children'),
#     [Input('metadata', 'children')]
# )
# def valueslice_inputs(data):
#     data = pd.read_json(data, orient='split').to_dict('records')
#     valueslice_list = []
#     for i, row in enumerate(data):
#         valueslice=html.Div(
#             children=
#             [
#                 dcc.Input(
#                     id=f'{i}_start',
#                     type='text',
#                     value=row['Values'][0],
#                     style={
#                         'marginBottom': 12,
#                         'marginRight': 10,
#                         'width': 50
#                     }
#                 ),
#                 dcc.Input(
#                     id=f'{i}_stop',
#                     type='text',
#                     value=row['Values'][-1],
#                     style={
#                         'marginBottom': 12,
#                         'width': 50
#                     }
#                 )
#             ],
#             id=f'{data[i]["Axis"]}_input'
#         )
#         valueslice_list.append(valueslice)
#     return valueslice_list


# @app.callback(
#     Output('metadata', 'children'),
#     [Input('confirm_values', 'n_clicks')],
#     [State('valuedefine', 'children'),
#      State('metadata_table', 'data')]
# )
# def define_axes(n_clicks, children, data):
#     """rewrite this to also handle the many exceptions that can occur
#     eg. not .csv, can't find column in upload, Range/Custom Inputs not formatted correctly,
#     strings in Range/Custom Inputs missing values in DataTable etc."""
#     if n_clicks > 0:
#         df = pd.DataFrame(data)
#         values = []
#         for i, row in enumerate(data):
#             if row['Define Values'] == 'Upload':
#                 value = au.load_data(
#                     au.get_axis_info(children[i])['contents'],
#                     usecols=[row['Name']]
#                 ).tolist()
#             elif row['Define Values'] == 'Range':
#                 start, stop = au.get_axis_info(children[i])['value'].split(',')
#                 start, stop = float(start), float(stop)
#                 value = np.linspace(start, stop, num=int(row['Num Values']))
#                 value = value.tolist()
#             else:
#                 value = [float(j) for j in au.get_axis_info(children[i])['value'].split(',')]
#             values.append(value)
#         df['Values'] = values
#         return df.to_json(orient='split')


# @app.callback(
#     Output('values_graduated_bars', 'children'),
#     [Input('metadata_table', 'data')],
#     [State('values_graduated_bars', 'children')]
# )
# def get_values_gb(data, agb):
#     gb_list = []
#     if agb is None:
#         for i in range(3):
#             gb_list.append(
#                 html.Div(
#                     daq.GraduatedBar(
#                         id=f'{i}_GB0',
#                         max=0,
#                         size=675
#                     ),
#                     style={'marginBottom': 20}
#                 )
#             )
#         return gb_list
#     else:
#         for i, row in enumerate(data):
#             n_values = min(300, row['Num Values'])
#             gb = html.Div(
#                 daq.GraduatedBar(
#                     id=f'{i}_GB{row["Num Values"]}',
#                     max=n_values,
#                     step=1,
#                     value=n_values,
#                     size=675
#                 ),
#                 style={'marginBottom': 20}
#             )
#             gb_list.append(gb)
#         return gb_list


# @app.callback(
#     Output('valuedefine', 'children'),
#     [Input('metadata_table', 'data')],
#     [State('valuedefine', 'children')]
# )
# def method_widgets(data, valuedefine):
#     children=[]
#     if valuedefine is None:
#         for i in range(3):
#             children.append(
#                 html.Div(
#                     dcc.Upload(
#                         id=f'{i}_UploadNone',
#                         children=html.Button('Upload'),
#                         style={'marginBottom': 12},
#                         multiple=True
#                     )
#                 )
#             )
#         return children

#     else:
#         for i, row in enumerate(data):
#             if row['Define Values'] == 'Upload':
#                 widget = html.Div(
#                             dcc.Upload(
#                                 id=f'{i}_Upload{row["Num Values"]}',
#                                 children=html.Button('Upload'),
#                                 style={'marginBottom': 12},
#                                 multiple=True
#                             )
#                         )
#             elif row['Define Values'] == 'Range':
#                 widget = html.Div(
#                         dcc.Input(
#                             id=f'{i}_Range{row["Num Values"]}',
#                             placeholder='Start, Stop',
#                             type='text',
#                             debounce=True,
#                             style={'marginBottom': 12, 'width': 115}
#                         )
#                     )
#             else:
#                 widget = html.Div(
#                         dcc.Input(
#                             id=f'{i}_Custom{row["Num Values"]}',
#                             placeholder='value1, value2,...',
#                             type='text',
#                             debounce=True,
#                             style={'marginBottom': 12, 'width': 115}
#                         )
#                     )

#             # check if value has already been defined
#             if 0 <= i < len(valuedefine) and widget.children.id == au.get_axis_info(valuedefine[i])['id']:
#                 widget = valuedefine[i]

#             children.append(widget)

#     return children


# @app.callback(
#     Output('metadata_table', 'data'),
#     [Input('add_rows', 'n_clicks')],
#     [State('metadata_table', 'data'),
#      State('metadata_table', 'columns')]
# )
# def add_row(n_clicks, rows, columns):
#     if n_clicks > 0:
#         rows.append({
#             'Axis': math.nan,
#             'Name': '',
#             'Num Values': 0,
#             'Define Values': 'Upload'
#         })
#     return rows


if __name__ == '__main__':
    app.run_server(debug=True)