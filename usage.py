import drag_grid
import dash
import dash_table as dt
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_html_components as html
import itertools

# external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(
    __name__,
    # external_stylesheets=external_stylesheets
)


app.layout = html.Div([
    html.Div(
        children=[
            drag_grid.DragGrid(
                id='input',
                label='my-label',
                children=[html.Div('Voltage') for i in range(9)],
                layout=[{
                    'i': f'comp_{compx}{compy}',
                    'x': compx,
                    'y': compy,
                    'w': 1,
                    'h': 1,
                    'isResizable': False,
                    'isDraggable': True
                } for compx, compy in itertools.product(range(3), range(3))],
                numcolumns=3,
                maxrows=3,
                divstyle = {
                    'border': '1 px solid #33DEF0',
                    'backgroundColor': '#33DEF0',
                    'textAlign': 'center',
                    'position': 'relative'
                },
                width=900
            ),
            html.Div(id='output'),
            drag_grid.DragGrid(
                id='input2',
                label='my-label2',
                children=[html.Div('Temp', style={'height': 100}) for i in range(9)],
                layout=[{
                    'i': f'comp2_{compx}{compy}',
                    'x': compx,
                    'y': compy,
                    'w': 1,
                    'h': 1,
                    'isResizable': True,
                    'isDraggable': True
                } for compx, compy in itertools.product(range(3), range(3))],
                numcolumns=3,
                maxrows=3,
                divstyle = {
                    'borderStyle': 'solid',
                    'height': 100,
                    'position': 'relative'
                },
                rowheight=500,
                width=1800
            ),
        ],
        style={'borderStyle': 'solid', 'position': 'relative'}
    )
])

# @app.callback(
#     Output('output', 'children'),
#     [Input('input', 'layout')]
# )
# def out(layout):
#     x = layout[0]['x']
#     return str(x)


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
