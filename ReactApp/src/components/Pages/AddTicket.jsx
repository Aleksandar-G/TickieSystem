import React, { useState } from "react";
import "../../styles/addTicket.css";
import instance from "../../Service/AxiosService";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import NavBar from "../Reusable/NavBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    marginTop: theme.spacing(2),
  },
  datePicker: {
    width: "100%",
  },
}));

export default function AddTicket() {
  const classes = useStyles();

  const [difficulty, setdifficulty] = useState("");
  const [priority, setpriority] = useState("");
  const [description, setdescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [addedTicket, setaddedTicket] = useState(false);
  const [error, seterror] = useState(false);

  const handleDifficultyChange = (event) => {
    setdifficulty(event.target.value);
  };

  const handlePriorityChange = (e) => {
    setpriority(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setdescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDuedate(e.target.value);
  };

  const apicall = (hash) => {
    instance
      .post("http://localhost:8080/db/tickets/add", {
        description: description,
        priority: priority,
        duedate: duedate,
        difficulty: difficulty,
        open: 0,
      })
      .then((res) => {
        setaddedTicket(true);
        seterror(false);
      })
      .catch((err) => {
        alert("Try Again!");
      });
  };

  const handeClick = (e) => {
    if (
      difficulty.length === 0 ||
      priority.length === 0 ||
      duedate.length === 0 ||
      description.length === 0
    ) {
      seterror(true);
    } else {
      apicall();
    }
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add new Ticket
          </Typography>
          <form className={classes.form} noValidate>
            {addedTicket && (
              <div className="alert alert-success">Ticket Added</div>
            )}
            {error && (
              <div className="alert alert-warning">
                Please fill all the the fields
              </div>
            )}

            <TextField
              id="duedate"
              label="duedate"
              type="date"
              onChange={(e) => {
                handleDueDateChange(e);
              }}
              className={classes.datePicker}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl
              className={classes.select}
              variant="outlined"
              fullWidth
            >
              <InputLabel htmlFor="outlined-age-native-simple" fullWidth>
                Difficulty
              </InputLabel>
              <Select
                id="difficulty"
                variant="outlined"
                native
                onChange={(e) => handleDifficultyChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="Intern">Intern</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </Select>
            </FormControl>

            <FormControl
              className={classes.select}
              variant="outlined"
              fullWidth
            >
              <InputLabel htmlFor="outlined-age-native-simple" fullWidth>
                Priority
              </InputLabel>
              <Select
                id="priority"
                variant="outlined"
                native
                onChange={(e) => handlePriorityChange(e)}
              >
                <option aria-label="None" value="" />
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              multiline
              type="text"
              id="description"
              data-testid="passwordLogin"
              autoComplete="current-password"
              onChange={(e) => {
                handleDescriptionChange(e);
              }}
            />

            <Button
              id="btnAddNewTicket"
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              data-testid="buttonLogin"
              className={classes.submit}
              onClick={(e) => {
                handeClick(e);
              }}
            >
              Add New Ticket
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
