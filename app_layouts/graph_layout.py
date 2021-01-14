import dash_core_components as dcc
import dash_html_components as html
import drag_grid as dg

def layout_graph():
    """
    Layout for graphing section
    """
    return html.Div(
        # grid containing graphs
        html.Div(
            dg.DragGrid(
                id='graph_dg',
                label='graph_dg',
                children=[],
                layout=[],
                rowheight=30,
                width=800,
                numcolumns=40,
                limitX=True,
                limitY=True
            ),
            style={'marginLeft': '2%'}
        ),
        style={
            'borderRadius': '25px',
            'borderLeft': '1px solid #607D8B',
            'borderRight': '1px solid #607D8B'
        },
        className='col-sm-8'
    )