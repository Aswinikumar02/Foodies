import React from 'react';
import ReactDOM from 'react-dom';
class child1 extends React.Component {
    constructor() {
        super();
        this.state = {cityName : ''};
        this .state = {cuisine : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
const value = event.target.value;
const name = event.target.name;
this.setState({[name]:value});
    }
    handleSubmit() {
  this.props.click(this.state.cityName, this.state.cuisine)
  }
    render(){
      return(
        <div>
        <label>CITY</label>
        <input type = 'text' value = {this.state.cityName} name = 'cityName' onChange = {this.handleChange} placeholder = 'enter city name'/>
        <label>CUISINES</label>
        <input type = 'text' value = {this.state.cuisine} name = 'cuisine' onChange = {this.handleChange} placeholder = 'enter cuisine'/>
        <input type = 'submit' value = 'submit' onClick = {this.handleSubmit.bind(this)}/>
      </div>
      )
    }
  }
module.exports = child1;
