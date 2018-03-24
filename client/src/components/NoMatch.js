import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UhOh from '../images/UhOh.png';
import { Image } from 'semantic-ui-react';

class NoMatch extends Component {
  render() {
    return (
      <div><Image src={UhOh} fluid/></div>
    );
  }
}

export default NoMatch;
