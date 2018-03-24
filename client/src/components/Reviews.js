import React, { Component } from 'react';
import { Rating, Segment, Image } from 'semantic-ui-react';
import reviews from '../images/reviews.jpg';

class reviewsApp extends Component {
  render() {
    return (
        <div><Image src={reviews} fluid/></div>
    );
  }
}

export default reviewsApp;
