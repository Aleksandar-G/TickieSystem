import React from 'react';
import instance from '../Service/AxiosService';
import Ticket from './Ticket';
import { Grid } from '@material-ui/core';


class GridTickets extends React.Component {

  constructor() {
    super();

    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
   
    instance.get('http://localhost:8080/db/tickets/all').then((res) => { this.setState({ tickets: res.data }) })
  
  }

  update = () => {
    this.componentDidMount();
    this.forceUpdate();
  }

  render() {
    let tickets = [];
    for (let index = 0; index < this.state.tickets.length; index++) {
      tickets.push(<Grid item xs={6} sm={4} md={3}><Ticket for="home" ticket={this.state.tickets[index]} grid={this.update}></Ticket> </Grid>);
    }
    return tickets;
  }
}

export default GridTickets;
