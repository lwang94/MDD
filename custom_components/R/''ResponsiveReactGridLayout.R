# AUTO GENERATED FILE - DO NOT EDIT

''ResponsiveReactGridLayout <- function(breakpoint=NULL, breakpoints=NULL, cols=NULL, margin=NULL, containerPadding=NULL, layouts=NULL, width=NULL, onBreakpointChange=NULL, onLayoutChange=NULL, onWidthChange=NULL) {
    
    props <- list(breakpoint=breakpoint, breakpoints=breakpoints, cols=cols, margin=margin, containerPadding=containerPadding, layouts=layouts, width=width, onBreakpointChange=onBreakpointChange, onLayoutChange=onLayoutChange, onWidthChange=onWidthChange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResponsiveReactGridLayout',
        namespace = 'drag_grid',
        propNames = c('breakpoint', 'breakpoints', 'cols', 'margin', 'containerPadding', 'layouts', 'width', 'onBreakpointChange', 'onLayoutChange', 'onWidthChange'),
        package = 'dragGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
