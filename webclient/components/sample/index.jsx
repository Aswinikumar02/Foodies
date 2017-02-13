import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Search.jsx';
import Component2 from './Result.jsx';
// const logger = require('./../../applogger');

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            button: '',
            color: '',
            icon: ''
        };
    }
    getResturantDataFromZomato(cityName, cuisine) {
        // logger.debug(cityName + cuisine);
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/cities?q=' + cityName,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', '429097fc8c4dc89a361442b90d98e979');
            },
            success: function(data) {
                let cityId = data.location_suggestions[0].id;
                // logger.debug('Successfully got city id from Zomato ' + cityId);
                $.ajax({
                    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city&q=' + cuisine + '&count=20',
                    type: 'GET',
                    beforeSend: function(request) {
                        request.setRequestHeader('user-key', '429097fc8c4dc89a361442b90d98e979');
                    },
                    success: function(data) {
                        // logger.debug('Successfully got JSON from Zomato' + data);
                        this.setState({result: data.restaurants, button: 'Search', color: 'green', icon: 'search'});
                    }.bind(this)
                });
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <Component1 click={this.getResturantDataFromZomato.bind(this)}/>
                <Component2 result={this.state.result}/>
            </div>
        );
    }
}
module.exports = MainComponent;
