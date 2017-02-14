import React from 'react';
import {Card, Image, Input} from 'semantic-ui-react';
import ButtonComponent from './button.jsx';
import $ from 'jquery';
let imgStyle = {
    height: '200px'
};
let textStyle = {
    color: 'green',
    fontSize: '110%'
};
let inputStyle = {
    color: 'black'
};
let CardStyle = {
    height: '150px'
};
let Cardpad = {
    margin: '5px'
};
class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            addButton: 'Add To Favourites',
            deleteButton: 'Delete',
            updateButton: 'Update',
            colorName: 'teal',
            updateColor: 'blue'
        };
    }

    addRestaurant() {
        $.ajax({
            url: './Restaurant/add',
            type: 'POST',
            data: {
                name: this.props.name,
                address: this.props.address,
                cuisines: this.props.cuisines,
                ratings: this.props.ratings,
                img: this.props.img
            },
            success: function(data) {
                // console.log(data);
                // console.log('Successfully added');
                this.setState({addButton: 'Added to Your Favourites'});
            }.bind(this)
        });
    }

    deleteFavourites() {
        var id = this.props.id;
        // console.log('deleted id', id);
        $.ajax({
            type: 'DELETE',
            url: `/Restaurant/delete/${id}`,
            success: function(msg) {
                // console.log('success', msg);
                this.props.removeFav(id);
            }.bind(this)
        });
    }

    updateFavourites() {
        let comments = this.state.comments;
        let id = this.props.id;
        $.ajax({
            url: `/restaurant/update/${id}`,
            type: 'PATCH',
            data: {
                comments: comments
            },
            success: function(data) {
                this.update(id, comments).bind(this)
                // this.setState({updateButton: 'Updated', updateColor: 'grey'});
                // console.log('done');
            }.bind(this)
        });
        this.setState({comments: ''})
    }

    update(id, comments) {
        this.props.update(id, comments);
    }
    getComments(e) {
        // console.log(e.target.value);
        this.setState({comments: e.target.value});
    }

    render() {
        let fav = this.props.fav;
        let del = '';
        let favourites = this.props.favourites;
        let add = '';
        let textBox = '';
        if (fav === 'fav') {
            add = <ButtonComponent click={this.addRestaurant.bind(this)} size='large' color={this.state.colorName || 'green'} name='heart' button={this.state.addButton}/>;
        }
        if (fav === 'favourites') {
            del = (
                <div>
                    <Input fluid type='text' onChange={this.getComments.bind(this)} placeholder={this.props.comments} value={this.state.comments}/>
                    <div className='ui two buttons'>
                        <ButtonComponent click={this.updateFavourites.bind(this)} size='small' color={this.state.updateColor || 'blue'} button={this.state.updateButton}/>
                        <ButtonComponent click={this.deleteFavourites.bind(this)} size='small' color={this.state.deleteColor || 'red'} button={this.state.deleteButton}/>
                    </div>
                </div>
            );
        }

        return (
            <Card style={Cardpad}>
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
