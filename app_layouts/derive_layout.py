import dash_html_components as html 
import dash_core_components as dcc
import dash_daq as daq


def derive_layout():
    return html.Div(
        children=[
            'Axis',
            dcc.Dropdown(
                id='derive_axis',
                style={'marginBottom': '5%'}
            ),
            daq.BooleanSwitch(
                id='derive_bool',
                color='#607D8B'
            )
        ],
        id='derive_div', 
        style=derive_style()
    )


def derive_style():
    return {
        'margin': 'auto',
        'width': '40%', 
        'textAlign': 'center'
    }