import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Menu from './Menu';
import About from './About';
import Location from './Location';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import reviewsApp from './Reviews';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/reviewsApp' component={reviewsApp} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/about' component={About} />
            <Route exact path='/location' component={Location} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
