import React, {useState} from 'react';
import '../styles/addTicket.css';
import instance from '../Service/AxiosService';
import bcrypt from 'bcryptjs';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function AddUser() {

  const classes = useStyles();

  const [name, setName] = useState('')
  const [level, setLevel] = useState('');
  const [password, setPassword] = useState('');
  const [addedUser, setaddedUser] = useState(false)
  const [error,seterror] = useState(false);
  const [passwordLengthError,setPasswordLengthError] = useState(false);

  const handlelevelChange = (event) => {

    setLevel(event.target.value);
  };


  const handleNameChange = (e) => {

    setName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const send = () => {

    if(name.length === 0 || level.length === 0 || password.length === 0){
      seterror(true);
    }
    else if (password.length < 6){
      setPasswordLengthError(true)
      seterror(false)
    }
    else{
      bcrypt.hash(password,10, function(err, hash){
        apicall(hash);
      });
    }
  }

  const apicall = (hash) => {
    instance.post('http://localhost:8080/db/user/add', {
      name: name,
      level: level,
      password: hash
    }).then((res) => {
      setaddedUser(true);
      seterror(false);
      setPasswordLengthError(false);
    }).catch((err) =>{
      alert("Try Again!")
    })
  }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <form className={classes.form} noValidate>
          {addedUser && <div className="alert alert-success">User Added</div>}
          {error && <div className="alert alert-warning">Fill all the fields</div>}
          {passwordLengthError && <div className="alert alert-warning">Password is too short</div>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              data-testid="usernameLogin"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              

              onChange={(e) => {handleNameChange(e)}}
            />

       
        <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple" fullWidth>Level</InputLabel>
        <Select
          id="level"
          variant="outlined"
          native
          onChange={(e) => handlelevelChange(e)}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Intern">Intern</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </Select>
        </FormControl>
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

              onChange={(e) => {handlePasswordChange(e)}}
            />

            <Button
              id="btnAddUser"
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              data-testid="buttonLogin"
              className={classes.submit}
              onClick={() => send()}
            >
              Add New User
            </Button>
          </form>
        </div>
      </Container>
    )
}




         



