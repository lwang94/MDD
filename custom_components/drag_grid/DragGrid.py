# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DragGrid(Component):
    """A DragGrid component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (list; optional): The children in each part of the grid.
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; required): A label that will be printed when this component is rendered.
- divstyle (dict; optional): The style of the Div that contains the children
- layout (list; optional): The layout of the grid
- compacttype (string; default 'horizontal'): The compact type
- rowheight (number; default 30): The height of one row in the grid
- width (number; default 1200): The total width of the grid
- numcolumns (number; default 6): The number of columns
- maxrows (number; default 1): Maximum number of rows in grid
- margin (list; default [10, 10]): Space between items"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, label=Component.REQUIRED, divstyle=Component.UNDEFINED, layout=Component.UNDEFINED, compacttype=Component.UNDEFINED, rowheight=Component.UNDEFINED, width=Component.UNDEFINED, numcolumns=Component.UNDEFINED, maxrows=Component.UNDEFINED, margin=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'label', 'divstyle', 'layout', 'compacttype', 'rowheight', 'width', 'numcolumns', 'maxrows', 'margin']
        self._type = 'DragGrid'
        self._namespace = 'drag_grid'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'label', 'divstyle', 'layout', 'compacttype', 'rowheight', 'width', 'numcolumns', 'maxrows', 'margin']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DragGrid, self).__init__(children=children, **args)
