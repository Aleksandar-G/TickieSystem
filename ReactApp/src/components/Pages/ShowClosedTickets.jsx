import { Select, Grid, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ClosedTicketsGrid from "../Reusable/ClosedTicketsGrid";
import instance from "../../Service/AxiosService";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Reusable/NavBar";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
    minWidth: 120,
    boxSizing: "border-box",
    height: "80vh",
    zIndex: "-1",
  },
  textField: {
    position: "relative",
    marginLeft: theme.spacing(3),
    float: "left",
    width: "75%",
    zIndex: "1",
  },
  button: {
    position: "relative",
    marginLeft: theme.spacing(3),
    width: "15%",
    zIndex: "1",
    padding: theme.spacing(2),
  },
  select: {
    width: "15%"

  }
}));

export default function ShowClosedTickets() {
  const classes = useStyles();

  const [usernames, setusernames] = useState([]);
  const [selectedUsername, setselectedUsername] = useState("");
  const [fetchedTickets, setfetchedTickets] = useState([])

  const getUsernames = () => {
    instance.get("http://localhost:8080/db/user/alluserName").then((res) => {
      setusernames(res.data);
    }).catch((err) => {
      alert(err)
    })
  };

  const addUsernames = () => {
    let select = document.getElementById("outlined-age-native-simple");

    usernames.forEach((e) => {
      let option = document.createElement("option");
      option.text = e;
      option.value = e;

      select.appendChild(option);
    });
  };

  const handelSelectChange = (e) => {
    setselectedUsername(e.target.value)
  }

  const fetchClosedTickets = () => {
    instance.get('http://localhost:8080/db/tickets/closeTicketUser?username='+selectedUsername)
    .then((res) => {
        setfetchedTickets(res.data);
})
.catch((err) => alert(err))

  }

  useEffect(() => {
    getUsernames();
  }, []);

  useEffect(() => {
    addUsernames();
  }, [usernames]);

  useEffect(() => {
  }, [fetchedTickets])

  return (
    <>
    <NavBar />
    <div>
      <Select
        id="usernames"
        variant="outlined"
        native
        className={classes.select}
        label="Age"
        onChange={(e) => handelSelectChange(e)}
        inputProps={{
          name: "age",
          id: "outlined-age-native-simple",
        }}
      ></Select>

      <Button
       className={classes.button}
        variant="outlined"
         color="primary"
         onClick={() => fetchClosedTickets()}
         >
        Show Closed Tickets
      </Button>
      </div>
      <br/>
      <div>
        <Grid container spacing={2}>
          <ClosedTicketsGrid tickets={fetchedTickets} />
        </Grid>
      </div>
    </>
  );
}
