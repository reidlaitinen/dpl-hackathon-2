import React from 'react';

class Cart extends React.Component { 
  state = { 
    name: '',
    quantity: '',
    total: '',
  }

  render () {
    return (
      <div class="ui list">
        {this.props.value}
      </div>
    )
  }
} 

export default Cart;