import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Counter } from './Counter';
import { Segment } from 'semantic-ui-react';

class Item extends React.Component { { name: '',
            price: '',
            type: '', 
            description: '' 
  }
}

  componentDidMount() {
    axios.get(`/api/item/${this.props.match.params.id}`)
      .then( res => this.setState({ dish: res.data }) )
  }


  <div>
    <Item />
    <Counter />
  </div>