# AUTO GENERATED FILE - DO NOT EDIT

''ReactGridLayout <- function(autoSize=NULL, cols=NULL, className=NULL, style=NULL, draggableHandle=NULL, draggableCancel=NULL, containerPadding=NULL, rowHeight=NULL, maxRows=NULL, layout=NULL, margin=NULL, isDraggable=NULL, isResizable=NULL, isDroppable=NULL, useCSSTransforms=NULL, transformScale=NULL, verticalCompact=NULL, compactType=NULL, preventCollision=NULL, droppingItem=NULL, onLayoutChange=NULL, onDragStart=NULL, onDrag=NULL, onDragStop=NULL, onResizeStart=NULL, onResize=NULL, onResizeStop=NULL, onDrop=NULL) {
    
    props <- list(autoSize=autoSize, cols=cols, className=className, style=style, draggableHandle=draggableHandle, draggableCancel=draggableCancel, containerPadding=containerPadding, rowHeight=rowHeight, maxRows=maxRows, layout=layout, margin=margin, isDraggable=isDraggable, isResizable=isResizable, isDroppable=isDroppable, useCSSTransforms=useCSSTransforms, transformScale=transformScale, verticalCompact=verticalCompact, compactType=compactType, preventCollision=preventCollision, droppingItem=droppingItem, onLayoutChange=onLayoutChange, onDragStart=onDragStart, onDrag=onDrag, onDragStop=onDragStop, onResizeStart=onResizeStart, onResize=onResize, onResizeStop=onResizeStop, onDrop=onDrop)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ReactGridLayout',
        namespace = 'drag_grid',
        propNames = c('autoSize', 'cols', 'className', 'style', 'draggableHandle', 'draggableCancel', 'containerPadding', 'rowHeight', 'maxRows', 'layout', 'margin', 'isDraggable', 'isResizable', 'isDroppable', 'useCSSTransforms', 'transformScale', 'verticalCompact', 'compactType', 'preventCollision', 'droppingItem', 'onLayoutChange', 'onDragStart', 'onDrag', 'onDragStop', 'onResizeStart', 'onResize', 'onResizeStop', 'onDrop'),
        package = 'dragGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
