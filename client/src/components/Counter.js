import React from 'react';

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState( state => {
      return { value: state.value + 1 }
    });
  }

  dec = () => {
    this.setState( state => {
      return { value: state.value - 1 }
    });
  }

  render() {
    return (
      <div>
        <button class="ui button active" onClick={this.inc}>+</button>
        <div>{this.state.value}</div>
        <button class="ui button active" onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;