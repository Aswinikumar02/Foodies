import React, {Component} from 'react';
import {Menu, Button} from 'semantic-ui-react';
let {Link} = require('react-router');

class nav extends Component {

    state = {
        activeItem: 'home'
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    onClick() {

       $.ajax({
           url: '/users/logout',
           type: 'GET',
           success: function(data) {
               if (typeof data.redirect == 'string')
                   window.location.replace(window.location.protocol + "//" + window.location.host + data.redirect);
               }
           .bind(this),
           error: function(err) {
               console.log('error in logout' + err);
           }.bind(this)
       });
   }

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Menu pointing>
                    
                    <Link to="/home">
                        <Menu.Item name='home' size='large' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    </Link>
                    <Link to="/favourites">
                        <Menu.Item name='favourites' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    </Link>
                    <Link to="/About">
                        <Menu.Item name='About' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button size='large' color='red' onClick={this.onClick.bind(this)}>logout</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
module.exports = nav;
