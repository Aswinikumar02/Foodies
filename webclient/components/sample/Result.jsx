import React from 'react';
import ReactDOM from 'react-dom';
var Component3 = require('./grandchild.jsx').GrandChildComponent1;

class ChildComponent2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

module.exports = {
    ChildComponent2
}
