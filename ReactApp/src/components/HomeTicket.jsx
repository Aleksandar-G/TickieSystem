import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import instance from '../Service/AxiosService';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  color: {
    color: grey,
  },

});


const doit = function(ticketId,username,update){
  console.log("asdasdasd");
  instance.post( 'http://localhost:8080/db/tickets/assign', {
    ticketId: ticketId,
    username: username
  })
  .then(function (response) {
    console.log(response);
    update();
  })
  .catch(function (error) {
    console.log(error);
  });

  
}

export default function HomeTicket(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.color}>
        <Typography variant="h5" component="h2">
          {props.ticket.id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          DueDate: {props.ticket.duedate}
        </Typography>
        <Typography variant="body2" component="p">
          PriorityLevel: <b>{props.ticket.priority}</b>
          <br />
          DifficultyLevel: <b>{props.ticket.difficulty}</b>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.ticket.description}
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" onClick={() => doit(props.ticket.id,sessionStorage.getItem("authenticatedUser"), props.grid)}>Claim Ticket</Button>
      </CardActions>
    </Card>
  );
}
