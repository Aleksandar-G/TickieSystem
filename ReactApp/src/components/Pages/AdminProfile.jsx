import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import ProfileGridTicket from "../Reusable/ProfileGridTicket";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  marginTop: {
    marginTop:theme.spacing(2), 
  },
  linkStyle:{
    color:'white',
    textdecoration: 'none'
  }
}));




export default function AdminProfile() {

  const profileGridTicket = React.createRef();
  const classes = useStyles();

  const handleChange = (event) => {
    
  let order = event.target.value;
  orderTickets(order);

  };

  const orderTickets = (order) => {
    profileGridTicket.current.changeOrder(order);
  };

  return (
    <div>
      <div>
        <Button id="btnAddNewTicket" variant="contained" color="primary" size="Large">
          <Link className={classes.linkStyle} to="/addticket"> Add new Ticket </Link>
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          size="Large"
          id="btnAddNewUser"
        >
          <Link className={classes.linkStyle} to="/adduser"> Add new User </Link>
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          size="Large"
          id="ShowClosedTickets"
        >
          <Link className={classes.linkStyle} to="/closedTickets"> Show Closed Tickets</Link>
        </Button>
      </div>
      <div className={classes.marginTop}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Order Tickets by:</FormLabel>
          <RadioGroup aria-label="order Tickets" name="orderTickets" onChange={handleChange}>
            <FormControlLabel
              value="duedate"
              control={<Radio color="primary" />}
              label="DueDate"
            />
            <FormControlLabel
              value="difficulty"
              control={<Radio color="primary" />}
              label="Difficulty"
            />
            <FormControlLabel
              value="priority"
              control={<Radio color="primary" />}
              label="Priority"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Grid container spacing={2}>
          <ProfileGridTicket ref={profileGridTicket} />
        </Grid>
      </div>
    </div>
  );
}
