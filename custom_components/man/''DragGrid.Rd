% Auto-generated: do not edit by hand
\name{''DragGrid}

\alias{''DragGrid}

\title{DragGrid component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
''DragGrid(children=NULL, id=NULL, label=NULL, divstyle=NULL,
layout=NULL, validX=NULL, lg=NULL, handleheight_lg=NULL,
handleheight_sm=NULL, compacttype=NULL,
verticalcompact=NULL, rowheight=NULL, width=NULL,
numcolumns=NULL, maxrows=NULL, margin=NULL)
}

\arguments{
\item{children}{Unnamed list. The children in each part of the grid.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{label}{Character. A label that will be printed when this component is rendered.}

\item{divstyle}{Named list. The style of the Div that contains the children}

\item{layout}{Unnamed list. The layout of the grid}

\item{validX}{Unnamed list. Valid x-values in the layout}

\item{lg}{Logical. Whether each grid item is fully expanded}

\item{handleheight_lg}{Unnamed list. The height of each draggable handle (large)}

\item{handleheight_sm}{Unnamed list. The height of each draggable handle (small)}

\item{compacttype}{Character. The compact type}

\item{verticalcompact}{Logical. Bool for vertical compacting}

\item{rowheight}{Numeric. The height of one row in the grid}

\item{width}{Numeric. The total width of the grid}

\item{numcolumns}{Numeric. The number of columns}

\item{maxrows}{Numeric. Maximum number of rows in grid}

\item{margin}{Unnamed list. Space between items}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

