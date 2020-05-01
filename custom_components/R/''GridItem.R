# AUTO GENERATED FILE - DO NOT EDIT

''GridItem <- function(children=NULL, cols=NULL, containerWidth=NULL, rowHeight=NULL, margin=NULL, maxRows=NULL, containerPadding=NULL, x=NULL, y=NULL, w=NULL, h=NULL, minW=NULL, maxW=NULL, minH=NULL, maxH=NULL, i=NULL, onDragStop=NULL, onDragStart=NULL, onDrag=NULL, onResizeStop=NULL, onResizeStart=NULL, onResize=NULL, isDraggable=NULL, isResizable=NULL, static=NULL, useCSSTransforms=NULL, transformScale=NULL, className=NULL, handle=NULL, cancel=NULL, droppingPosition=NULL, usePercentages=NULL, style=NULL) {
    
    props <- list(children=children, cols=cols, containerWidth=containerWidth, rowHeight=rowHeight, margin=margin, maxRows=maxRows, containerPadding=containerPadding, x=x, y=y, w=w, h=h, minW=minW, maxW=maxW, minH=minH, maxH=maxH, i=i, onDragStop=onDragStop, onDragStart=onDragStart, onDrag=onDrag, onResizeStop=onResizeStop, onResizeStart=onResizeStart, onResize=onResize, isDraggable=isDraggable, isResizable=isResizable, static=static, useCSSTransforms=useCSSTransforms, transformScale=transformScale, className=className, handle=handle, cancel=cancel, droppingPosition=droppingPosition, usePercentages=usePercentages, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GridItem',
        namespace = 'drag_grid',
        propNames = c('children', 'cols', 'containerWidth', 'rowHeight', 'margin', 'maxRows', 'containerPadding', 'x', 'y', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'i', 'onDragStop', 'onDragStart', 'onDrag', 'onResizeStop', 'onResizeStart', 'onResize', 'isDraggable', 'isResizable', 'static', 'useCSSTransforms', 'transformScale', 'className', 'handle', 'cancel', 'droppingPosition', 'usePercentages', 'style'),
        package = 'dragGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
