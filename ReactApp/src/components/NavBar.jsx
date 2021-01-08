import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Login from './LoginComponent';
import SecuredRoute from './SecuredRoute';
import AddTicket from '../components/AddTicket';
import Profile from './Profile';
import AddUser from './AddUser';
import SignOutService from '../Service/SignOutService';

function NavBar() {

  const linkStyles = {
    color: 'grey'
  };

  const navbarstyle = {
    backgroundColor: '#ffffff'
  }
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarstyle}>
        <a className="navbar-brand">LOGO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/"> <li className="nav-item nav-link">
              Home
      </li></Link>
            <Link to="/profile"><li className="nav-item nav-link">
              Profile
      </li></Link>
      <Link to="/signout"><li className="nav-item nav-link">
              Sign OUT
      </li></Link>
          </ul>

        </div>
      </nav>
      <br/>
      <Switch>
        
        <SecuredRoute exact path="/">
          <Home />
        </SecuredRoute>
        <SecuredRoute path="/profile">
          <Profile />
        </SecuredRoute>
        <Route path="/login" render={props => (<Login {...props} />)}>

        </Route>
        <SecuredRoute path="/addticket">
          <AddTicket />
        </SecuredRoute>

        <SecuredRoute path="/adduser">
          <AddUser />
        </SecuredRoute>

        <SecuredRoute path="/signout">
          <SignOutService />
        </SecuredRoute>

      </Switch>
    </Router>
  );
}

export default NavBar;