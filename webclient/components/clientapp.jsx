import React from 'react';
import ReactDOM from 'react-dom';
let Component = require('./sample/index.jsx');

class MainComponent extends React.Component {
    constructor() {
        super();
        }

    render() {
        return (
            <div>
                <Component/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));

    module.exports = MainComponent;
