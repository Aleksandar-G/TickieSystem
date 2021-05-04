import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LoginComponent";
import SecuredRoute from "./components/SecuredRoute";
import AddTicket from "./components/AddTicket";
import Profile from "./components/Profile";
import AddUser from "./components/AddUser";
import SignOutService from "./Service/SignOutService";
import ShowClosedTickets from "./components/ShowClosedTickets";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <SecuredRoute exact path="/">
            <Home />
          </SecuredRoute>
          <SecuredRoute path="/profile">
            <Profile />
          </SecuredRoute>
          <Route path="/login" render={(props) => <Login {...props} />}></Route>
          <SecuredRoute path="/addticket">
            <AddTicket />
          </SecuredRoute>

          <SecuredRoute path="/adduser">
            <AddUser />
          </SecuredRoute>

          <SecuredRoute path="/signout">
            <SignOutService />
          </SecuredRoute>

          <SecuredRoute path="/closedTickets">
            <ShowClosedTickets />
          </SecuredRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
