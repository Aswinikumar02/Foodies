import React, {Component} from 'react';
import {Menu, Button} from 'semantic-ui-react';
let {Link} = require('react-router');

class nav extends Component {

    state = {
        activeItem: 'home'
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Menu pointing>
                    <Link to="/">
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
                            <Button size='large' color='red'>Signup/Login</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
module.exports = nav;
