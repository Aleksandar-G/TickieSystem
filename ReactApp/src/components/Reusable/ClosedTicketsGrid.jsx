import React, { Component } from 'react'
import ClosedTicket from './ClosedTicket';
import Grid from '@material-ui/core/Grid';

export default function ClosedTicketsGrid(props) {
  return (
    <>
      {props.tickets.map(x => <Grid item xs={6} sm={4} md={3}><ClosedTicket ticket={x}></ClosedTicket> </Grid>)}
    </>
  )
}


