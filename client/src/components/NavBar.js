import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { Image } from 'semantic-ui-react';
import banner from '../images/banner.png';
import { Button } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';

export default class MenuTop extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Menu style={styles.NavBar}>

        <Menu.Item
          name='Log In'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Log In
        </Menu.Item>

        <Menu.Item>
          <Link to="/menu">
            Menu
          </Link>
        </Menu.Item>

        <Menu.Item>
        <Link to="/location">
          Contact
        </Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>


        <Menu.Item>
          <Link to="/about">
            About
          </Link>
        </Menu.Item>

        <div><Image src={banner}/></div>
          <div>
            <a href="http://www.facebook.com"><Button square color='red' icon='facebook' size='big' /></a>
            <a href="http://www.twitter.com"><Button square color='blue' icon='twitter' size='big' /></a>
            <a href="http://www.yelp.com"><Button square color='yellow' icon='yelp' size='big' /></a>
            <a href="http://www.instagram.com"><Button square color='pink' icon='instagram' size='big' /></a>
            <Button style={{marginLeft: '20px'}} color='green' size='big'>ORDER NOW</Button>
          </div>
      </Menu>
    )
  }
}

const styles = {
  NavBar: {backgroundColor: "#ff5959"},
  Button: {
    display: "flex",
    alignSelf: "right"
  }
}
