import React, { useState } from "react";
import AuthenticationService from "../../Service/AuthenticationService";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let loginProps = Object;

export default function LoginComponent(props) {
  const classes = useStyles();

  const [username, setusername] = useState("test");
  const [password, setPassword] = useState("pass");
  const [error, setError] = useState();

  const reset = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    setusername(username);
    setPassword(password);
    loginClicked({ username }.username, { password }.password);
  };

  const loginClicked = (username, password) => {
    AuthenticationService.executeJwtAuthenticationService(username, password)
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          username,
          response.data.token
        ).then(props.history.push(`/`));
      })
      .catch(() => {
        setError("error");
      });
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {error && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              data-testid="usernameLogin"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              data-testid="passwordLogin"
              autoComplete="current-password"
            />
            <Button
              id="loginButton"
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              data-testid="buttonLogin"
              className={classes.submit}
              onClick={() => reset()}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
