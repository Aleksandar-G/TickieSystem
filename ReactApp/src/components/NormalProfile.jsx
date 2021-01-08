import React from "react";
import { Grid } from "@material-ui/core";
import ProfileGridTicket from "./ProfileGridTicket";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


/*export default class NormalProfile extends React.Component {

  constructor(props) {
    super(props);

    this.profileGridTicket = React.createRef();
  }

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
  setValue(event.target.value);
  orderTickets();
  };

  const orderTickets = () => {
    profileGridTicket.current.changeOrder(value);
  };

  render() {
    return (
      <div>

        <div>
          <Grid container spacing={2}>
            <ProfileGridTicket ref={this.profileGridTicket} />
          </Grid>
        </div>
      </div>
    )
  }
}*/


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
}));


export default function NormalProfile() {

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
    <div className={classes.margin}>
      <div>
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



