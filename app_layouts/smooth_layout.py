import dash_html_components as html 
import dash_core_components as dcc
import dash_daq as daq


def smooth_layout():
    """
    Entire layout for smoothing section
    """
    return html.Div(
        children=[
            # smoothing parameters
            "Mode",
            smooth_mode_dropdown(),
            "Axis",
            smooth_axis_dropdown(),
            "Window Size",
            smooth_window_input(),

            # boolean input for whether 
            # to apply smoothing
            daq.BooleanSwitch(
                id='smooth_bool',
                color='#607D8B'
            )
        ],
        id='smooth_div', 
        style=smooth_style()
    )


def smooth_mode_dropdown():
    """
    Dropdown menu to define mode of smoothing
    """
    return dcc.Dropdown(
        id='smooth_mode',
        options=[
            {'label': 'Mean', 'value': 'mean'},
            {'label': 'Median', 'value': 'median'},
            {'label': 'Min', 'value': 'min'},
            {'label': 'Max', 'value': 'max'}
        ],
        style={'marginBottom': '5%'}
    )


def smooth_axis_dropdown():
    """
    Dropdown menu to define axis for smoothing
    """
    return dcc.Dropdown(
        id='smooth_axis',
        style={'marginBottom': '5%'}
    )


def smooth_window_input():
    """
    Input to define window/kernel size
    """
    return dcc.Input(
        id='smooth_window',
        type='number',
        min=1,
        className='row',
        style={
            'margin': 'auto',
            'marginBottom': '5%',
            'width': '30%'
        }
    )


def smooth_style():
    """
    Style of smoothing div
    """
    return {
        'margin': 'auto',
        'textAlign': 'center'
    }