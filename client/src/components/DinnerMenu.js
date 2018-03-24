import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';


class DinnerMenu extends React.Component {
    state = { menu_items: [], showForm: false }

componentDidMount() {
    axios.get('api/menus/1')
    .then(res => this.setState({ menu_items: res.data})) 
}

    show() {
       let { menu_items } = this.state
       return (
           <ul>
               { menu_items.map( m =>
                <li key={m.id}>
                    <Link to={`/menu_items/${m.id}`}>{m.name}</Link>
              </li>
              )
            }
            </ul>)
       }
       form(){
           return <Form submit={this.submit}/>
       }

       submit = (menu) => {
           let { menu_items} = this.state
           axios.post('/api/menu_items', { menu} )
           .then( res => this.setState({ menu_items: [res.data, ...menu_items], showForm: false}))
       }

       toggleForm = () => {
           this.setState( state => {
               return { showForm: !state.showForm}
           })
       }

       render() {
           let { showForm } = this.state
           return(
               <div>
                   <h2>Menu Items</h2>
                   <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
                   { showForm ? this.form() : this.show()}
                </div>
           )
       }

}
    



export default DinnerMenu;

