import React, { Component } from 'react'
import instance from '../Service/AxiosService';
import Ticket from './Ticket';
import { Grid } from '@material-ui/core';

export default class ProfileGridTicket extends Component {

    constructor(props) {
        super();
    
        this.state = {
          order : props.order,
          tickets: []
        };
      }

    componentDidMount(){
      instance.get('http://localhost:8080/db/tickets?username='+sessionStorage.getItem("authenticatedUser")).then((res) =>  {this.setState({tickets: res.data})})
    }

    comparePriority = (a,b) =>{
      if(a.priority == "High"){return -1;}
      else if(b.priority == "High"){return 1}
      else if (a.priority == "Low"){return 1}
      else if (b.priority == "Low"){return -1}
      else {return 0};
    }
    compareDifficulty = (a,b) => {
      if(a.difficulty == "Senior"){return -1;}
      else if(b.difficulty == "Senior"){return 1}
      else if (a.difficulty == "Intern"){return 1}
      else if (b.difficulty == "Intern"){return -1}
      else {return 0};
    }
    compareDueDate = (a,b) => {
      if(a.duedate >= b.duedate){return 1}
      else {return -1};
    }

    changeOrder = (order) => {
      if(order == "priority"){
      this.state.tickets.sort(this.comparePriority);
    }
    else if(order == "difficulty"){
      this.state.tickets.sort(this.compareDifficulty)
    }
    else if(order == "duedate"){
      this.state.tickets.sort(this.compareDueDate)
    }

      this.forceUpdate();
    }
    

    render() {
        
            let tickets = [];
            for (let index = 0; index < this.state.tickets.length; index++) {
              console.log(this.state.tickets[index])
              tickets.push(<Grid item xs={6} sm={4} md={3}><Ticket for="user" ticket={this.state.tickets[index]}></Ticket> </Grid>);
            }
            return tickets;
        
    }
}
