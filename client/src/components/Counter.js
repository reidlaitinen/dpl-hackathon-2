import React from 'react';
import { Button } from 'semantic-ui-react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <Button.Group>
          <Button onClick={this.props.inc}>+</Button>
            <Button.Or text={this.props.value}/>
          <Button onClick={this.props.dec}>-</Button>
        </Button.Group>
      </div>
    )
  }
}

export default Counter;