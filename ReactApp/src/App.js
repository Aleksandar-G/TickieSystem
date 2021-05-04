import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/LoginComponent";
import SecuredRoute from "./components/Reusable/SecuredRoute";
import AddTicket from "./components/Pages/AddTicket";
import Profile from "./components/Reusable/Profile";
import AddUser from "./components/Pages/AddUser";
import SignOutService from "./Service/SignOutService";
import ShowClosedTickets from "./components/Pages/ShowClosedTickets";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
