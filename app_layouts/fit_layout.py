import dash_html_components as html 
import dash_core_components as dcc
import dash_daq as daq


def fit_layout():
    return html.Div(
        children=[
            'fit',
            dcc.Input(
                id='fit_input',
                type='number'
            ),
            daq.BooleanSwitch(
                id='fit_bool',
                color='#607D8B'
            )
        ],
        id='fit_div', 
        style={'display': 'none'}
    )