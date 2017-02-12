import React from 'react';
import {Card, Icon, Image, Button, Input} from 'semantic-ui-react';
import ButtonComponent from './button.jsx';
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
        this.state = {comments:'',
        addButton: 'Add To Favourites',
        deleteButton:'Delete',
        updateButton:'Update',colorName: 'green',
        updateColor:'blue'
      };
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
            console.log('Successfully added');
            this.setState({addButton:'Added to Your Favourites'});

        }.bind(this),
        error: function(err) {
            console.log('error occurred on AJAX');
            console.log(err);
        }.bind(this)
    });
  }

  deleteFavourites(){
      var id = this.props.id;
      console.log('deleted id',id);
      $.ajax({
          type: 'DELETE',
          url: `/restaurant/delete/${id}`,
          success: function(msg){
            console.log('success',msg);
              this.props.removeFav(id);
          }.bind(this)
      });
    }

    updateFavourites() {
        var comments = this.state.comments;
        var id = this.props.id;
        $.ajax({
            url: '/Restaurant/update/${id}',
            type: 'PATCH',
            data: {
                'comments': comments
            },
            success: function(data) {
                console.log('done');
                this.setState({updateButton: 'Updated'});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    getComments(e) {
        console.log(e.target.value);
        this.setState({comments: e.target.value});
    }

    render() {

      var fav = this.props.fav;
      var del = "";
      var favourites =this.props.favourites;
      var add ='';
      var textBox = '';
      if(fav=='fav'){
        add = <ButtonComponent  click={this.addRestaurant.bind(this)}
          size='large' color={this.state.colorName || 'green'}
          name='heart' button={this.state.addButton}/>;
      }
      if(fav=='favourites'){
        del = (
                <div>
                    <Input fluid type='text' onChange={this.getComments.bind(this)} placeholder={this.props.comments} value={this.state.comments}/>
                    <div className='ui two buttons'>
                        <ButtonComponent click={this.updateFavourites.bind(this)}
                          size='small' color={this.state.updateColor || 'blue'}
                          button={this.state.updateButton}/>
                        <ButtonComponent click={this.deleteFavourites.bind(this)}
                          size='small' color={this.state.deleteColor || 'red'} button={this.state.deleteButton}/>
                    </div>
                </div>
            )
      }
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
                {add}
                {textBox}
              {del}
            </Card>
        );
    }
}
module.exports = Cards;
