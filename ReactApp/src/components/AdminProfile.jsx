import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import ProfileGridTicket from "./ProfileGridTicket";
import { Link } from 'react-router-dom'

/*class Profile extends React.Component {

  constructor(props) {
    super();

    this.state = {
        tickets: []
    };
  }

      componentDidMount(){
        if(props.choose == "user")
        axios.get('http://localhost:8080/db/tickets?username='+sessionStorage.getItem("authenticatedUser")).then((res) =>  {this.setState({tickets: res.data})})
      }

    render() {
      <Grid container spacing={2}></Grid>
        let tickets = [];
        console.log("state"+this.state.tickets.length);
        //tickets.push(<Grid container spacing={2}>);
        for (let index = 0; index < this.state.tickets.length; index++) {
          console.log(this.state.tickets[index])
          tickets.push(<Grid item xs = {6} sm = {4}  md = {3}><Card ticket= {this.state.tickets[index]}></Card> </Grid>);
        }
        
            return tickets;

    }
}

export default Profile;*/

export default function AdminProfile() {

  const profileGridTicket = React.createRef();


  const orderTickets = (event) => {

    let orderValue = document.querySelector('input[name="order"]:checked').value;
    profileGridTicket.current.changeOrder(orderValue);
  }

  return (
    <div>
      <div>
        <button> 
          <Link to="/addticket">
            <li className="nav-item nav-link">addticket</li>
          </Link>
        </button>
        <button> 
          <Link to="/adduser">
            <li className="nav-item nav-link">add new user</li>
          </Link>
        </button>
      </div>
      <div>
        <input type="radio" id="selectByDate" name="order" value="duedate"></input>
        <label >Order by duedate</label><br />
        <input type="radio" id="selectByDifficulty" name="order" value="difficulty"></input>
        <label >order by difficulty</label> <br />
        <input type="radio" id="selectByPriority" name="order" value="priority"></input>
        <label >order by priority</label> <br />
        <button type="submit" onClick={orderTickets} value="Submit">Select</button>
      </div>
      <div>
        <Grid container spacing={2}>
          <ProfileGridTicket ref={profileGridTicket}/>
        </Grid>
      </div>
    </div>
  );
}
