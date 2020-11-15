import axios from "axios";
//import GridTickets from './GridTickets'
import { Grid } from '@material-ui/core';
import ProfileGridTicket from './ProfileGridTicket';
import AdminProfile from './AdminProfile';
import NormalProfile from './NormalProfile';

/*class Profile extends React.Component {

  constructor(props) {
    super();

    this.state = {
        tickets: []
    };
  }

      componentDidMount(){
        if(props.choose == "user")
        axios.get('http://localhost:8080/db/tickets?username='+sessionStorage.getItem("authenticatedUser")).then((res) =>  {this.setState({tickets: res.data})})
      }

    render() {
      <Grid container spacing={2}></Grid>
        let tickets = [];
        console.log("state"+this.state.tickets.length);
        //tickets.push(<Grid container spacing={2}>);
        for (let index = 0; index < this.state.tickets.length; index++) {
          console.log(this.state.tickets[index])
          tickets.push(<Grid item xs = {6} sm = {4}  md = {3}><Card ticket= {this.state.tickets[index]}></Card> </Grid>);
        }
        
            return tickets;

    }
}

export default Profile;*/

import React, { Component } from 'react';

class Profile extends Component {

  constructor(props) {
    super();

    this.state = {
      role: String
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/user/isadmin?username=" + sessionStorage.getItem("authenticatedUser")).then((res) => this.setState({role:res.data}))
  }

  render() {
    debugger;
    if (this.state.role == "admin") {
      return <AdminProfile />
    }
    else {
      return <NormalProfile />
    }
  }
}

export default Profile;
