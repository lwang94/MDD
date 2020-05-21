import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';
// import '\\react-grid-layout\\css\\styles.css';
// import '\\react-resizable\\css\\styles.css';

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
        this.myRef = React.createRef();

        this.onLC = this.onLC.bind(this);
        this.onD = this.onD.bind(this);
        this.create_children = this.create_children.bind(this);

    }

    create_children() {
        const children = []
        if (this.props.children != null) {
            let propchild = this.props.children;
            if (propchild.constructor != Array) {
                propchild = [propchild]
            };
            for (let inc = 0; inc < propchild.length; inc += 1) {
                const child = <div key={this.props.layout[inc].i} style={this.props.divstyle}>
                    {propchild[inc]}
                </div>;
                children.push(child);
            }
        }
        return children
    }

    onLC(lc) {
        this.props.setProps({
            layout: lc
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
    }

    render() {
        return (
        <div ref={this.myRef}>
            <GridLayout
                className='layout'
                layout={this.props.layout}
                compactType={this.props.compacttype}
                rowHeight={this.props.rowheight}
                width={this.props.width}
                cols={this.props.numcolumns}
                maxRows={this.props.maxrows}
                onLayoutChange={this.onLC}
                onDrag={this.onD}
            >
                {this.create_children()}
            </GridLayout>
        </div>
        )
    }
}


DragGrid.defaultProps = {
    children: [' '],
    divstyle: {},
    layout: [{i: 'default', x: 0, y: 0, w: 1, h: 1}],
    compacttype: 'horizontal',
    rowheight: 30,
    width: 1200,
    numcolumns: 6,
    maxrows: 1
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
     * The compact type
     */
    compacttype: PropTypes.string,

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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
