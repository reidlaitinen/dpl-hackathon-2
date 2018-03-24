import React, { Component } from 'react';
import { Header, Image, Pagination } from 'semantic-ui-react';
import LunchMenu from './LunchMenu';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../images/logo.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div><Image src={Logo} fluid/></div>
        <Pagination style={{marginLeft: '500px'}} defaultActivePage={1} totalPages={5} fluid/>
      </div>
    );
  }
}


export default Home;
