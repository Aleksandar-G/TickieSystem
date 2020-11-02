import React from 'react';
import axios from "axios";
import Card from './card';
import { Grid } from '@material-ui/core';


  class GridTickets extends React.Component {

    constructor() {
        super();

        this.state = {
            tickets: []
        };
      }

      componentDidMount(){
        axios.get('http://localhost:8080/db/tickets/all').then((res) => {this.setState({tickets: res.data})})
      }

    render() {
        let tickets = [];
        console.log(this.state.tickets.length);
        for (let index = 0; index < this.state.tickets.length; index++) {
          console.log(this.state.tickets[index])
           tickets.push(<Grid item xs = {6} sm = {4}  md = {3}><Card ticket= {this.state.tickets[index]}></Card> </Grid>);
        }
            return tickets;
    }
  }

export default GridTickets;
