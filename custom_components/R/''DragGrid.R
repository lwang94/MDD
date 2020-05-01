# AUTO GENERATED FILE - DO NOT EDIT

''DragGrid <- function(children=NULL, id=NULL, label=NULL, layout=NULL, compacttype=NULL, rowheight=NULL, width=NULL, numcolumns=NULL, maxrows=NULL) {
    
    props <- list(children=children, id=id, label=label, layout=layout, compacttype=compacttype, rowheight=rowheight, width=width, numcolumns=numcolumns, maxrows=maxrows)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragGrid',
        namespace = 'drag_grid',
        propNames = c('children', 'id', 'label', 'layout', 'compacttype', 'rowheight', 'width', 'numcolumns', 'maxrows'),
        package = 'dragGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
