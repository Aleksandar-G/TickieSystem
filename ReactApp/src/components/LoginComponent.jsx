import React, { Component } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import AuthenticationService from '../Service/AuthenticationService';

class LoginComponent extends Component {

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

export default LoginComponent