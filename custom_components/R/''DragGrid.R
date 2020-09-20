# AUTO GENERATED FILE - DO NOT EDIT

''DragGrid <- function(children=NULL, id=NULL, label=NULL, divstyle=NULL, layout=NULL, validX=NULL, lg=NULL, handleheight_lg=NULL, handleheight_sm=NULL, compacttype=NULL, verticalcompact=NULL, rowheight=NULL, width=NULL, numcolumns=NULL, maxrows=NULL, margin=NULL) {
    
    props <- list(children=children, id=id, label=label, divstyle=divstyle, layout=layout, validX=validX, lg=lg, handleheight_lg=handleheight_lg, handleheight_sm=handleheight_sm, compacttype=compacttype, verticalcompact=verticalcompact, rowheight=rowheight, width=width, numcolumns=numcolumns, maxrows=maxrows, margin=margin)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragGrid',
        namespace = 'drag_grid',
        propNames = c('children', 'id', 'label', 'divstyle', 'layout', 'validX', 'lg', 'handleheight_lg', 'handleheight_sm', 'compacttype', 'verticalcompact', 'rowheight', 'width', 'numcolumns', 'maxrows', 'margin'),
        package = 'dragGrid'
        )

    structure(component, class = c('dash_component', 'list'))
}
