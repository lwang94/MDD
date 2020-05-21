/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DragGrid } from '../lib';

class App extends Component {

    constructor() {
        super();

        const layout = [];
        const children = [];
        const numRows = 3;
        const numColumns = 3;
        const components = ['Voltage'];
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
                children.push(<div style={{borderStyle: 'solid'}}>{components[0]}</div>);
            }
        };
        this.state = {
            id: 'test',
            label: 'test',
            layout: layout,
            children: children
        };

        const layout2 = [];
        const children2 = [];
        const numRows2 = 3;
        const numColumns2 = 3;
        const components2 = ['Temp'];
        for (let compy = 0; compy < numRows2; compy += 1) {
            for (let compx = 0; compx < numColumns2; compx += 1) {
                const increment2 = compx + compy * numRows2;

                const comp2 = {
                    i: `comp2_${increment2}`,
                    x: compx,
                    y: compy,
                    w: 1,
                    h: 1,
                    isResizable: false
                };
                layout2.push(comp2);
                children2.push(<div style={{borderStyle: 'solid'}}>{components2[0]}</div>);
            }
        };
        this.state2 = {
            id: 'test2',
            label: 'test2',
            layout: layout2,
            children: children2
        };

        this.setProps = this.setProps.bind(this);
        this.setProps2 = this.setProps2.bind(this)
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    setProps2(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <div style={{borderStyle: 'solid'}}>
                    {/* <DragGrid
                        setProps={this.setProps}
                        {...this.state}
                    />
                    <h1>{this.state.layout[0].x}</h1> */}
                    <DragGrid
                        setProps={this.setProps2}
                        {...this.state2}
                    />
                </div>
            </div>
        )
    }
}

export default App;
