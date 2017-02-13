import React from 'react';
import DisplayFavComponent from './displayfavourites.jsx';
// const logger = require('./../../applogger');
class Favourites extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };
    }
    componentWillMount() {
        $.ajax({
            url: '/Restaurant/view',
            type: 'GET',
            success: function(data) {
                // logger.debug('Successfully got JSON' + data);
                this.setState({json: data.restaurant});
            }.bind(this)
        });
    }

    removeFavCard(id) {
        let favArray = this.state.json;
        let arr = [];
        for (let obj of favArray) {
            if (obj._id !== id) {
                arr.push(obj);
            }
        }
        this.setState({json: arr});
    }
    render() {
        return (
            <div>
                <DisplayFavComponent removeFav={this.removeFavCard.bind(this)} fav='favourites' json={this.state.json}/>
            </div>
        );
    }
}
module.exports = Favourites;
