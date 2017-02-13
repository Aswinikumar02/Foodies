import React from 'react';
// import ReactDOM from 'react-dom';
import {Button, Input} from 'semantic-ui-react';
var itemstyle = {
    marginLeft: '400px'
};
class child1 extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: ''
        };
        this.state = {
            cuisine: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    handleSubmit() {
        this.props.click(this.state.cityName, this.state.cuisine);
    }
    render() {
        return (
            <div style={itemstyle}>
                <label>CITY</label>
                <Input type='text' value={this.state.cityName} name='cityName' onChange={this.handleChange} placeholder='Enter city name'/>
                <label>CUISINES</label>
                <Input type='text' value={this.state.cuisine} name='cuisine' onChange={this.handleChange} placeholder='Enter cuisine'/>
                <Button type='submit' color='grey' value='submit' onClick={this.handleSubmit.bind(this)}>SEARCH</Button>
            </div>
        );
    }
}
module.exports = child1;
