import React from 'react';
import ReactDOM from 'react-dom';
var Component = require('./components/sample/index.jsx')

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
