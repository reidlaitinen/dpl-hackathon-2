import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { Image } from 'semantic-ui-react';
import banner from '../images/banner.png';
import { Button } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react'

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

        <Menu.Item
          name='menu'
          active={activeItem === 'menu'}
          onClick={this.handleItemClick}
        >
          Menu
        </Menu.Item>

        <Menu.Item
          name='location'
          active={activeItem === 'location'}
          onClick={this.handleItemClick}
        >
          Location
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='aboutus'
          active={activeItem === 'aboutus'}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>
        <div><Image src={banner}/></div>
          <Button style={{marginLeft: '200px'}} color='yellow'>ORDER NOW</Button>
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
