import React from 'react';
import LunchMenu from './LunchMenu';
import DinnerMenu from './DinnerMenu';
import Sushi from './Sushi';
import { Divider } from 'semantic-ui-react';

const Menu = () => (

    <div>
        <h1>Lunch Menu</h1>
        <LunchMenu />
        <Divider />
        <h1> Dinner Menu</h1>
        < DinnerMenu />
        <Divider />
        <h1> Sushi Menu</h1>
        <Sushi /> 
    </div>

)

export default Menu; 
