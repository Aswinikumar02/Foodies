import React from 'react';
import ReactDOM from 'react-dom';
var Component1 = require('./Search.jsx').ChildComponent1;
var Component2 = require('./Result.jsx').ChildComponent2;

class MainComponent extends React.Component {
    constructor() {
        super();
    }
    getResturantDataFromZomato(City, cuisine) {
        console.log(City + cuisine);
        $.ajax({

            url: "https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q=" + cuisine + "&count=10",
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "429097fc8c4dc89a361442b90d98e979");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + data);

            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    render() {
        return (
            <div>
                <Component1 makeClick={this.getResturantDataFromZomato.bind(this)}/>
                <Component2 result={this.}
            </div>
        );
    }
}

module.exports = MainComponent;
