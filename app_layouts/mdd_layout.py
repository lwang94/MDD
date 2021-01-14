import dash_core_components as dcc
import dash_html_components as html


def layout_mdd():
    """
    Layout for storing MDD information.
    Includes: mdd, metadata, metadata values, 
    and whether metadata has changed for a given callback
    """
    return html.Div(
        children=[
            dcc.Store(id='mdd'), # storing mdd.dataDF
            dcc.Store(id='metadata'), # storing mdd.metadata

            # store values in metadata as separate Stores for callback matching
            html.Div(id='metavalues'),

            # bool: keeps track of whether MDD callback changed metadata
            dcc.Store(id='meta_changed')
        ]
    )


def layout_mddcopy():
    """
    Layout for storing MDD copy information.
    Used for graphing and modifying data. 
    """
    return html.Div(
        children=[
            dcc.Store(id='mddcopy'), # storing modified mdd.dataDF
            dcc.Store(id='metacopy') # storing modified mdd.metadata            
        ]
    )


def layout_mddshift():
    """
    Layout for storing MDD shift information.
    Used for shifting view of data. 
    """
    return html.Div(
        children=[
            dcc.Store(id='mddshift'), # storing shifted mdd.dataDF
            dcc.Store(id='metashift') # storing shifted mdd.metadata            
        ]
    )