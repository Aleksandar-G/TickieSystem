import React, { Component } from 'react'
import instance from '../Service/AxiosService';
import ClosedTicket from './ClosedTicket';
import Grid from '@material-ui/core/Grid';



export default class ClosedTicketsGrid extends Component {

    constructor(props) {
        super();
    
        this.state = {
          tickets: []
        };
      }

    render() {
        let tickets = [];
        //console.log(this.props.tickets);
        for (let index = 0; index < this.props.tickets.length; index++) {
          tickets.push(<Grid item xs={6} sm={4} md={3}><ClosedTicket ticket={this.props.tickets[index]}></ClosedTicket> </Grid>);
        }
        return tickets;
    }
}

