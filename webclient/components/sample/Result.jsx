import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './cards.jsx';


import {Card, Icon, Image, Button} from 'semantic-ui-react';
class ChildComponent2 extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        var divStyle = {
            margin: 70
        }

        var list = [];
        var restaurants = this.props.result.map(function(item) {
            return (<div><Cards img={item.restaurant.featured_image}
              name={item.restaurant.name} address={item.restaurant.location.address}
              cuisines={item.restaurant.cuisines}
              ratings={item.restaurant.user_rating.aggregate_rating}/>
              </div>
            );
        });
        return (
            <div style={divStyle}>
                <Card.Group>{restaurants}</Card.Group>

            </div>
        );
    }

}
module.exports = ChildComponent2
