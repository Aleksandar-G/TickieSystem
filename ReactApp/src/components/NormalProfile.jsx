import React from "react";
import { Grid } from "@material-ui/core";
import ProfileGridTicket from "./ProfileGridTicket";


export default class NormalProfile extends React.Component {

  constructor(props) {
    super(props);

    this.profileGridTicket = React.createRef();
  }

  orderTickets = (event) => {
    let orderValue = document.querySelector('input[name="order"]:checked').value;
    this.profileGridTicket.current.changeOrder(orderValue);
  }

  render() {
    return (
      <div>
      <div>
        <input type="radio" id="selectByDate" name="order" value="duedate"></input>
        <label >Order by duedate</label><br />
        <input type="radio" id="selectByDifficulty" name="order" value="difficulty"></input>
        <label >order by difficulty</label> <br />
        <input type="radio" id="selectByPriority" name="order" value="priority"></input>
        <label >order by priority</label> <br />
        <button type="submit" onClick={this.orderTickets} value="Submit">Select</button>
      </div>
        <div>
          <Grid container spacing={2}>
            <ProfileGridTicket ref={this.profileGridTicket} />
          </Grid>
        </div>
      </div>
    )
  }
}


