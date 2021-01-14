import dash_core_components as dcc


def create_graph_child(i, x, mdd):
    """
    Create graph item for grid
    """
    # find y values in mdd
    y = mdd.dataDF[mdd.label].iloc[i * len(x): (i + 1) * len(x)]

    # define graph title and x axis label
    title = graph_title(i, x, mdd)
    xlabel = mdd.metadata['Name'].iloc[-1]

    return dcc.Graph(
        id={'type': 'graph', 'index': i},
        figure={
            'data': [{'x': x, 'y': y}],
            'layout': {
                'title': title[:-2],
                'xaxis': {'title': xlabel},
                'yaxis': {'title': mdd.label},
                'font': {'size': 8}
            }
        },
        config={'editable': True},
        style={'width': '98%', 'height': '98%'}
    )


def graph_title(i, x, mdd):
    """
    Create title for each graph
    """
    title = ''
    for j in range(len(mdd.metadata['Name']) - 1):
        var_name = mdd.metadata['Name'].iloc[j] # name of previous variable

        title += var_name[:3] # truncate name if too long

        # find value of previous variable for graph and put into brackets
        title += ' (' + str(mdd.dataDF[var_name].iloc[i * len(x)]) + '), '
    
    return title


def create_graph_layout(i):
    """
    Define placement of each graph item in grid
    """
    # find which row and column item should be in
    row = i // 2
    col = i % 2

    return {
        'i': f'graph{i}',
        'x': col * 20,
        'y': row * 10,
        'w': 20,
        'h': 10,
        'isResizable': True,
        'isDraggable': True
    }
