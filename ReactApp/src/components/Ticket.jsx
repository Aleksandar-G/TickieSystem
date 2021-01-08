import React from 'react';
import UserTicket from './UserTicket';
import HomeTicket from './HomeTicket';


export default function ticket(props) {

    if (props.for == "user") {
      return <UserTicket ticket ={props.ticket} grid ={props.grid} ></UserTicket>
    }
    else if (props.for == "home") {
      return <HomeTicket ticket ={props.ticket} grid ={props.grid} ></HomeTicket>
    }

}
