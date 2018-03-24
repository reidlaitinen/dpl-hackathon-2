import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import LunchMenu from './LunchMenu';
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Link to={'/LunchMenu/'}> Lunch Menu </Link>


      </div>  

    );
  }
}

export default Home;
