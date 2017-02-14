import React from 'react';
import CardsComponent from './cards.jsx';
import {Card} from 'semantic-ui-react';
class DisplayFavComponent extends React.Component {
    constructor() {
        super();
    }
    update(id, comments) {
        this.props.update(id, comments);
    }
    render() {
        let divStyle = {
            margin: 70
        };
        let fav = this.props.fav;
        let removeFav = this.props.removeFav;
        let update = this.update.bind(this);
        let JsonArray = this.props.json.map(function(item) {
            if (fav === 'favourites') {
                return <CardsComponent id={item._id} name={item.name} img={item.img} address={item.address} cuisines={item.cuisines} ratings={item.ratings} comments={item.comments} fav='favourites' removeFav={removeFav} update={update}/>;
            }
        });
        return (
            <div style={divStyle}>
                <Card.Group>{JsonArray}</Card.Group>
            </div>
        );
    }
}
module.exports = DisplayFavComponent;
