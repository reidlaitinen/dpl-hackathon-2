import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';

class Item extends React.Component { 
  state = { 
    name: '',
    price: '',
    type: '', 
    description: '',
    quantity: 0, 
  }

  inc = () => {
    this.setState( state => {
      return { quantity: state.quantity + 1 }
    });
  }

  dec = () => {
    this.setState( state => {
      return { quantity: state.quantity - 1 }
    });
  }

  render () {
    return (
      <Counter 
        inc={this.inc}
        dec={this.dec} 
        value={this.state.quantity}
      />
    )


  }
    

}

export default connect()(Item)