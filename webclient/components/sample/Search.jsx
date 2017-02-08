import React from 'react';
import ReactDOM from 'react-dom';
var Component3 = require('./grandchild.jsx').GrandChildComponent1;

class ChildComponent1 extends React.Component {
    constructor() {
        super();
    }

    handleClick() {
        this.props.makeClick((document.getElementById('City').value), (document.getElementById('cuisine').value));
    }
    render() {
        return (
            <div>

                <input id='City' type='text' placeholder='Search by City'/>
                <input id='cuisine' type='text' placeholder='Search by Cuisine'/>
                <button id='buttonsearch' type='submit' onClick={this.handleClick.bind(this)}>Search</button>

                <Component3/>
            </div>
        );
    }
}

module.exports = {
    ChildComponent1
}
