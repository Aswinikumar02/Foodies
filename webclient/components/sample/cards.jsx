import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
var textBoxStyle = {
    height: '170px'
}
var imgStyle = {
    height: '200px'
}
var textStyle = {
    color: 'green',
    fontSize: '110%'
}
var inputStyle = {
    color: 'black'
}
let CardStyle = {
	height:'150px'

}
class Cards extends React.Component {
    constructor() {
        super();
    }

		addRestaurant() {
    $.ajax({

        url:'./Restaurant/add' ,
        type: 'POST',
        data:{
					"name":this.props.name,
					"address":this.props.address,
					"cuisines":this.props.cuisines,
					"ratings":this.props.ratings,
					"img":this.props.img
				},
        success: function(data) {
            console.log(data);
            console.log();('Successfully added');

        }.bind(this),
        error: function(err) {
            console.log('error occurred on AJAX');
            console.log(err);
        }.bind(this)
    });
  }

    render() {
			var addRestaurant = this.addRestaurant.bind(this);
        return (
            <Card>
                <Image style={imgStyle} src={this.props.img}/>
                <Card.Content style={CardStyle}>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <span style={textStyle}>Ratings :</span>
                        <span style={inputStyle}>{this.props.ratings}/5</span>
                    </a>
                </Card.Content>
                <Button color = 'red' onClick={addRestaurant}>ADD</Button>
            </Card>
        );
    }
}
module.exports = Cards;
