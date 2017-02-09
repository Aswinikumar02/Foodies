import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Search.jsx';
import Component2 from './Result.jsx';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            result: []
        };
    }
    getResturantDataFromZomato(cityName, cuisine) {
        console.log(cityName + cuisine);
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/cities?q=' + cityName,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', '429097fc8c4dc89a361442b90d98e979');
            },
            success: function(data) {
                let cityId = data.location_suggestions[0].id;
                console.log('Successfully got city id from Zomato ' + cityId);
                $.ajax({
                  url: 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city&q=' + cuisine + '&count=20',
                    type: 'GET',
                    beforeSend: function(request) {
                        request.setRequestHeader('user-key', '429097fc8c4dc89a361442b90d98e979');
                    },
                    success: function(data) {
                        console.log('Successfully got JSON from Zomato' + data);
                        this.setState({result: data.restaurants});
                      }.bind(this),
                    error: function(err) {
                      console.log('error occurred on AJAX');
                        console.log(err);
                    }.bind(this)
                });
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
                <Component1 click={this.getResturantDataFromZomato.bind(this)}/>
                <Component2 result={this.state.result}/>
                <h1>{this.props.address}</h1>
            </div>
        );
    }
}
module.exports = MainComponent;
