import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import App from '../App';
import About from '../About'
import Home from './Home'
import Login from './LoginComponent';
import SecuredRoute from './SecuredRoute';

function NavBar() {

  const linkStyles = {
    color: 'grey'
  };
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
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
      <Link to="/login"><li className="nav-item nav-link">
              Login
      </li></Link>
          </ul>

        </div>
      </nav>
      <Switch>
        
        <SecuredRoute exact path="/">
          <Home />
        </SecuredRoute>
        <SecuredRoute path="/profile">
          <About />
        </SecuredRoute>
        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default NavBar;