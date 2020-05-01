/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DragGrid } from '../lib';

class App extends Component {

    constructor() {
        super();

        const layout = [];
        const children = [];
        const numRows = 1;
        const numColumns = 3;
        const components = ['Voltage', 'Temp', 'Pressure']
        for (let compy = 0; compy < numRows; compy += 1) {
            for (let compx = 0; compx < numColumns; compx += 1) {
                const increment = compx + compy * numRows;

                const comp = {
                    i: `comp_${increment}`,
                    x: compx,
                    y: compy,
                    w: 1,
                    h: 1,
                    isResizable: false
                };
                layout.push(comp);
                children.push(<div style={{borderStyle: 'solid'}}>{components[increment]}</div>);
            }
        };
        this.state = {
            id: 'test',
            label: 'test',
            // children: children,
            // layout: layout,
            compacttype: 'vertical',
            maxrows: 2
        };

        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                {/* <div>Hello</div> */}
                <div>
                    <DragGrid
                        setProps={this.setProps}
                        {...this.state}
                    />
                    {/* <h1>{this.state.layout[0].x}</h1> */}
                </div>
            </div>
        )
    }
}

export default App;
