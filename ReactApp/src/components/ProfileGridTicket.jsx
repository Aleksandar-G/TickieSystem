import React, { Component } from 'react'
import axios from "axios";
import Ticket from './Ticket';
import { Grid } from '@material-ui/core';

export default class ProfileGridTicket extends Component {

    constructor() {
        super();
    
        this.state = {
          tickets: []
        };
      }

    componentDidMount(){
        axios.get('http://localhost:8080/db/tickets?username='+sessionStorage.getItem("authenticatedUser")).then((res) =>  {this.setState({tickets: res.data})})
    }

    render() {
        
            let tickets = [];
            console.log(this.state.tickets.length);
            for (let index = 0; index < this.state.tickets.length; index++) {
              console.log(this.state.tickets[index])
              tickets.push(<Grid item xs={6} sm={4} md={3}><Ticket for="user" ticket={this.state.tickets[index]}></Ticket> </Grid>);
            }
            return tickets;
        
    }
}
