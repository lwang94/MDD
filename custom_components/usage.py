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
            dcc.Input(
                id='input',
                type='number',
                value=0
            ),
            drag_grid.DragGrid(
                id='output',
                label='my-label2',
                rowheight=100,
                width=1800
            ),
        ],
        style={'borderStyle': 'solid', 'position': 'relative'}
    )
])

@app.callback(
    [Output('output', 'children'),
     Output('output', 'layout'),
     Output('output', 'numcolumns'),
     Output('output', 'maxrows'),
     Output('output', 'divstyle')],
    [Input('input', 'value')]
)
def out(val):
    children = [html.Div('Temp') for i in range(val**2)]
    layout = [{
        'i': f'comp2_{compx}{compy}',
        'x': compx * 5,
        'y': compy * 5,
        'w': 5,
        'h': 5,
        'isResizable': True,
        'isDraggable': True
    } for compx, compy in itertools.product(range(val), range(val))]
    ncolumns = val * 5
    nrows = val * 5
    divstyle = {
        'borderStyle': 'solid'
    }
    return children, layout, ncolumns, nrows, divstyle




# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
