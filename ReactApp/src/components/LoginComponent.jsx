import React, { useState} from 'react'
import AuthenticationService from '../Service/AuthenticationService';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

/*class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'test',
            password: 'pass',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        //in28minutes,dummy
        // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/courses`)
        //     //this.setState({showSuccessMessage:true})
        //     //this.setState({hasLoginFailed:false})
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }

       // let history = useHistory();
       // let location = useLocation();
       // let auth = useAuth();
       debugger;

       AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password).then(this.props.history.push('/'));

                this.setState({ showSuccessMessage:true })

            }).catch((error) => {
                console.log(error);
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">

                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div className="alert alert-success">Login Sucessful</div>}
                    
                    User Name: <input data-testid="usernameLogin" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input data-testid="passwordLogin" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button data-testid="buttonLogin" className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent*/

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


  let loginProps = Object;


  
  
  export default function LoginComponent(props) {
    const classes = useStyles();

    const [username, setusername] = useState("test");
    const [password, setPassword] = useState("pass");
    const [error, setError] = useState();

   // loginProps = props;

    const reset = () => {

        
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        setusername(username);
        setPassword(password);
        loginClicked({username}.username,{password}.password);
    }

    const loginClicked = (username,password) => {
        /*AuthenticationService.executeBasicAuthenticationService(username, password)
        .then(() => {
            AuthenticationService.registerSuccessfulLogin(username, password).then(props.history.push('/'));
    
            //this.setState({ showSuccessMessage:true })
    
        }).catch((error) => {
            console.log(error);
            setError("error");
            //this.setState({ hasLoginFailed: true })
        })*/
        AuthenticationService.executeJwtAuthenticationService(username, password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token).then(props.history.push(`/`))
            
        }).catch(() => {
            //this.setState({ showSuccessMessage: false })
            //this.setState({ hasLoginFailed: true })
            //console.log(error);
            setError("error");
        })
    
      }
    


    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
          {error && <div className="alert alert-warning">Invalid Credentials</div>}
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
    );
  }