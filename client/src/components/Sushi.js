import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List } from 'semantic-ui-react';


class Sushi extends React.Component {
    state = { menu_items: [] }

    componentDidMount() {
    axios.get('/api/menus/3')
      .then( ({ data: menu_items }) => this.setState({ menu_items: menu_items }) )
  }

       render() {
        const { menu_items } = this.state;
           return(
               <div>
                   <List>
                    { menu_items.map( menuItem => 
                    <List.Item 
                    key={menuItem.id}
                    >
                    {menuItem.name}
                 </List.Item> 
              )
            }
          </List>
                   
                </div>
           )
       }

}
    



export default Sushi;

