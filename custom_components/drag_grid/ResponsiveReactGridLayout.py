# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ResponsiveReactGridLayout(Component):
    """A ResponsiveReactGridLayout component.


Keyword arguments:
- breakpoint (string; optional)
- breakpoints (dict; default { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })
- cols (dict; default { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })
- margin (list | dict; default [10, 10])
- containerPadding (list | dict; default {
  lg: [0, 0],
  md: [0, 0],
  sm: [0, 0],
  xs: [0, 0],
  xxs: [0, 0]
})
- layouts (optional)
- width (number; required)"""
    @_explicitize_args
    def __init__(self, breakpoint=Component.UNDEFINED, breakpoints=Component.UNDEFINED, cols=Component.UNDEFINED, margin=Component.UNDEFINED, containerPadding=Component.UNDEFINED, layouts=Component.UNDEFINED, width=Component.REQUIRED, onBreakpointChange=Component.UNDEFINED, onLayoutChange=Component.UNDEFINED, onWidthChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['breakpoint', 'breakpoints', 'cols', 'margin', 'containerPadding', 'layouts', 'width']
        self._type = 'ResponsiveReactGridLayout'
        self._namespace = 'drag_grid'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['breakpoint', 'breakpoints', 'cols', 'margin', 'containerPadding', 'layouts', 'width']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['width']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ResponsiveReactGridLayout, self).__init__(**args)
