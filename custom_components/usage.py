import drag_grid
import dash
import dash_table as dt
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_html_components as html

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(
    __name__,
    external_stylesheets=external_stylesheets
)

child = []
layout = []
numRows = 1
numColumns = 3
components = ['Voltage', 'Temp', 'Pressure']
for compy in range(numRows):
    for compx in range(numColumns):
        increment = compx + compy * numRows

        comp = {'i': f'comp_{increment}', 'x': compx, 'y': compy, 'w': 1, 'h': 1, 'isResizable': False}
        layout.append(comp)
        child.append(
            html.Div(
                components[increment],
                style={'borderStyle': 'solid'}
            )
        )

app.layout = html.Div([
    dcc.Graph(
        id='graph',
        className='six columns'
    ),
    html.Div(
        children=[
            dt.DataTable(
                id='slice_table',
                editable=True,
                style_table={'overflowX': 'scroll'}
            ),
            drag_grid.DragGrid(
                    children=child,
                    id='input',
                    label='my-label',
                    layout=layout,
                    numcolumns=4
            ),
            html.Div(id='output')
        ],
        style={'borderStyle': 'solid'},
        className='six columns'
    )
])


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
