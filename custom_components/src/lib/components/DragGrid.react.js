import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DragGrid extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef(); /**keeps track of instance */

        this.onLC = this.onLC.bind(this); /**binds layout change function */
        this.fixedLayout = this.fixedLayout.bind(this);
        this.onD = this.onD.bind(this); /**binds drag function */
        this.create_children = this.create_children.bind(this); /**binds create children function */

    }

    create_children(propchild) {
        const children = []
        if (this.props.children != null) {
            let propchild = this.props.children;
            if (propchild.constructor != Array) {
                propchild = [propchild]
            };
            
            let hh = []
            if (this.props.lg == true) {
                hh = this.props.handleheight_lg
            }
            else {hh = this.props.handleheight_sm};

            for (let inc = 0; inc < propchild.length; inc += 1) {
                const child = <div key={this.props.layout[inc].i} style={this.props.divstyle}>
                    <div
                        className="react-grid-dragHandleExample"
                        style={{
                            background: '#CFD8DC',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius:'10px',
                            height:hh[inc]
                        }}
                    >
                    </div>
                    {propchild[inc]}
                </div>;
                children.push(child);
            }
        }
        return children
    }
    
    fixedLayout(lc) {
        const maxY = this.props.maxrows - 1

        const maxRowXs = new Set()
        for (let i = 0; i < lc.length; i += 1) {
            if (lc[i].y == maxY) {
                maxRowXs.add(lc[i].x)
            }
        }
        
        let missingX = undefined
        let found = false;
        for (let i = 0; i < this.props.validX.length; i += 1) {
            if (!maxRowXs.has(this.props.validX[i]) && !found) {
                missingX = this.props.validX[i];
                found = true
            }
        }
        
        const fixedLayout = []
        for (let i = 0; i < lc.length; i += 1) {
            if (lc[i].y > maxY) {
                fixedLayout.push({
                    ...lc[i],
                    y: maxY,
                    x: missingX
                })
            }
            else {fixedLayout.push(lc[i])}
        }

        return fixedLayout
    }

    onLC(lc) {
        const fixedLayout = this.fixedLayout(lc)
        this.props.setProps({
            layout: fixedLayout
        })
    }

    onD(layout, oldItem, newItem, placeholder, e, element) {
        const grid = this.myRef.current;

        const translateXMaxValue = grid.offsetWidth - element.offsetWidth;
        const translateYMaxValue = grid.offsetHeight - element.offsetHeight;

        const translateValues = window.getComputedStyle(element).transform.split(',');
        let translateX = parseInt(translateValues[translateValues.length - 2]);
        let translateY = parseInt(translateValues[translateValues.length - 1].slice(0, -1));

        if (translateX > translateXMaxValue) {
            translateX = translateXMaxValue;
        }
        if (translateX < 0) {
            translateX = 0;
        }
        if (translateY > translateYMaxValue) {
            translateY = translateYMaxValue;
        }
        if (translateY < 0) {
            translateY = 0;
        }

        element.style.transform = `translate(${translateX}px, ${translateY}px)`;

        const fixedLayout = this.fixedLayout(layout)
        this.props.setProps({
            layout: fixedLayout
        })
    }


    render() {
        return (
            <div ref={this.myRef}>
                <GridLayout
                    className='layout'
                    layout={this.props.layout}
                    compactType={this.props.compacttype}
                    verticalCompact={this.props.verticalcompact}
                    rowHeight={this.props.rowheight}
                    width={this.props.width}
                    cols={this.props.numcolumns}
                    maxRows={this.props.maxrows}
                    margin={this.props.margin}
                    onLayoutChange={this.onLC}
                    onDrag={this.onD}
                    draggableHandle='.react-grid-dragHandleExample'
                >
                    {this.create_children()}
                </GridLayout>
            </div>
        )
    }
}


DragGrid.defaultProps = {
    children: [],
    divstyle: {},
    layout: [],
    validX: [],
    lg: true,
    handleheight_lg: [],
    handleheight_sm: [],
    compacttype: 'horizontal',
    verticalcompact: false,
    rowheight: 30,
    width: 1200,
    numcolumns: 6,
    maxrows: 1,
    margin: [10, 10]
};

DragGrid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The children in each part of the grid.
     */
    children: PropTypes.array,

    /**
     * The style of the Div that contains the children
     */
    divstyle: PropTypes.object,

    /**
     * The layout of the grid
     */
    layout: PropTypes.array,

    /**
     * Valid x-values in the layout
     */
    validX: PropTypes.array,

    /**
     * Whether each grid item is fully expanded
     */
    lg: PropTypes.bool,

    /**
     * The height of each draggable handle (large)
     */
    handleheight_lg: PropTypes.array,

    /**
     * The height of each draggable handle (small)
     */
    handleheight_sm: PropTypes.array,

    /**
     * The compact type
     */
    compacttype: PropTypes.string,

    /**
     * Bool for vertical compacting
     */
    verticalcompact: PropTypes.bool,

    /**
     * The height of one row in the grid
     */
    rowheight: PropTypes.number,

    /**
     * The total width of the grid
     */
    width: PropTypes.number,

    /**
     * The number of columns
     */
    numcolumns: PropTypes.number,

    /**
     * Maximum number of rows in grid
     */
    maxrows: PropTypes.number,

    /**
     * Space between items
     */
    margin: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
