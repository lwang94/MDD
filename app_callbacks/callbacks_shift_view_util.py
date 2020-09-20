import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc


def shift_view_draggable(row, last=False):
    return html.Div(
        children=[
            shift_view_axis_button(row),
            dbc.Collapse(
                children=[
                    shift_view_stop(row, last=last),
                    shift_view_slider(row, last=last),
                    shift_view_start(row)
                ],
                id={'type': 'shift_view_axis_collapse', 'index': row['Axis']},
                style={'background': '#FAEAAC'}
            )
        ]
    )

def shift_view_axis_button(row):
    return html.Button(
        f'{row["Name"]}', 
        id={'type': 'shift_view_axis_collapse_button', 'index': row['Axis']},
        style={
            'fontSize': '8',
            'textAlign': 'center',
            'background': '#50C878',
            'width': '100%',
            'overflow': 'hidden',
            'textOverflow': 'ellipsis'
        }
    )


def shift_view_stop(row, last=False):
    if last:
        value = row['Values'][-1]
    else:
        value = row['Values'][0]

    return dcc.Input(
        id={'type': 'shift_stop', 'index': row['Axis']},
        type='text',
        value=value,
        style={
            'width': '80%', 
            'textAlign': 'center',
            'marginLeft': '10%', 
            'marginRight': '10%'
        }
    )


def shift_view_slider(row, last=False):
    if last:
        stop = row['Values'][-1]
    else:
        stop = row['Values'][0]

    return html.Div(
        dcc.RangeSlider(
            id={'type': 'shift_slider', 'index': row['Axis']},
            min=row['Values'][0],
            max=row['Values'][-1],
            marks={i: '' for i in row['Values']},
            step=None,
            value=[row['Values'][0], stop],
            vertical=True,
            verticalHeight=200
        ),
        style={'marginLeft': '45%'}
    )


def shift_view_start(row):
    return dcc.Input(
        id={'type': 'shift_start', 'index': row['Axis']},
        type='text',
        value=row['Values'][0],
        style={
            'width': '80%', 
            'textAlign': 'center',
            'marginLeft': '10%', 
            'marginRight': '10%'
        }
    )


def static_x():
    return html.Div(
        'x', 
        style={
            'fontSize': '14', 
            'marginTop': '30%',
            'textAlign': 'center'
        }
    )


def shift_view_layout_item(i, row):
    return (
        {
            'i': f'sv{row["Axis"]}',
            'x': 4 * i,
            'y': 0,
            'w': 3,
            'h': 1,
            'isResizable': False,
            'isDraggable': True
        },
        {
            'i': f'x{row["Axis"]}',
            'x': 4 * i + 3,
            'y': 0,
            'w': 1,
            'h': 1,
            'static': True
        }
    )