# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GridItem(Component):
    """A GridItem component.
An individual item within a ReactGridLayout.

Keyword arguments:
- children (dash component; required)
- cols (number; required)
- containerWidth (number; required)
- rowHeight (number; required)
- margin (list; required)
- maxRows (number; required)
- containerPadding (list; required)
- x (number; required)
- y (number; required)
- w (number; required)
- h (number; required)
- minW (default 1)
- maxW (default Infinity)
- minH (default 1)
- maxH (default Infinity)
- i (string; required)
- isDraggable (boolean; required)
- isResizable (boolean; required)
- static (boolean; optional)
- useCSSTransforms (boolean; optional)
- transformScale (number; default 1)
- className (string; default "")
- handle (string; default "")
- cancel (string; default "")
- droppingPosition (dict; optional): droppingPosition has the following type: dict containing keys 'e', 'left', 'top'.
Those keys have the following types:
  - e (dict; required)
  - left (number; required)
  - top (number; required)
- usePercentages (boolean; optional)
- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, children=None, cols=Component.REQUIRED, containerWidth=Component.REQUIRED, rowHeight=Component.REQUIRED, margin=Component.REQUIRED, maxRows=Component.REQUIRED, containerPadding=Component.REQUIRED, x=Component.REQUIRED, y=Component.REQUIRED, w=Component.REQUIRED, h=Component.REQUIRED, minW=Component.UNDEFINED, maxW=Component.UNDEFINED, minH=Component.UNDEFINED, maxH=Component.UNDEFINED, i=Component.REQUIRED, onDragStop=Component.UNDEFINED, onDragStart=Component.UNDEFINED, onDrag=Component.UNDEFINED, onResizeStop=Component.UNDEFINED, onResizeStart=Component.UNDEFINED, onResize=Component.UNDEFINED, isDraggable=Component.REQUIRED, isResizable=Component.REQUIRED, static=Component.UNDEFINED, useCSSTransforms=Component.UNDEFINED, transformScale=Component.UNDEFINED, className=Component.UNDEFINED, handle=Component.UNDEFINED, cancel=Component.UNDEFINED, droppingPosition=Component.UNDEFINED, usePercentages=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'cols', 'containerWidth', 'rowHeight', 'margin', 'maxRows', 'containerPadding', 'x', 'y', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'i', 'isDraggable', 'isResizable', 'static', 'useCSSTransforms', 'transformScale', 'className', 'handle', 'cancel', 'droppingPosition', 'usePercentages', 'style']
        self._type = 'GridItem'
        self._namespace = 'drag_grid'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'cols', 'containerWidth', 'rowHeight', 'margin', 'maxRows', 'containerPadding', 'x', 'y', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'i', 'isDraggable', 'isResizable', 'static', 'useCSSTransforms', 'transformScale', 'className', 'handle', 'cancel', 'droppingPosition', 'usePercentages', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['children', 'cols', 'containerWidth', 'rowHeight', 'margin', 'maxRows', 'containerPadding', 'x', 'y', 'w', 'h', 'i', 'isDraggable', 'isResizable']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GridItem, self).__init__(children=children, **args)
