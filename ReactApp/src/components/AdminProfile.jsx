import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import ProfileGridTicket from "./ProfileGridTicket";
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

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
  setValue(event.target.value);
  orderTickets();
  };

  const orderTickets = () => {
    profileGridTicket.current.changeOrder(value);
  };

  return (
    <div>
      <div>
        <Button variant="contained" color="primary" size="Large">
          <Link className={classes.linkStyle} to="/addticket"> Add new Ticket </Link>
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          size="Large"
        >
          <Link className={classes.linkStyle} to="/adduser"> Add new User </Link>
        </Button>
      </div>
      <div className={classes.marginTop}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Order Tickets by:</FormLabel>
          <RadioGroup aria-label="order Tickets" name="orderTickets" value={value} onChange={handleChange}>
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
