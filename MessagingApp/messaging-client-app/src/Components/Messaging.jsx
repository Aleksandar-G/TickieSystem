import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const connect = (userName) => {

    userName = "test";

    if (userName) {

      const Stomp = require('stompjs')

      let SockJS = require('sockjs-client')

      SockJS = new SockJS('/ws')

      stompClient = Stomp.over(SockJS);

      stompClient.connect({}, this.onConnected, this.onError);

      this.setState({
        username: userName,
      })
    }
  }

  const onConnected = () => {

    this.setState({
      channelConnected: true
    })

    // Subscribing to the public topic
    stompClient.subscribe('/topic/pubic', this.onMessageReceived);

    // Registering user to server as a public chat user
    stompClient.send("/app/addUser", {}, JSON.stringify({ sender: this.state.username, type: 'JOIN' }))

  }

  const onError = (error) => {
    this.setState({
      error: 'Could not connect you to the Chat Room Server. Please refresh this page and try again!'
    })
  }

const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(3),
      minWidth: 120,
      boxSizing: 'border-box',
      height: '90vh'

    },
    textField: {
        position: "relative",
        float:"right", 
        top:"84vh",
        width:'100%'
    },
  }));

export default function Messaging() {

    const classes = useStyles();

    return (
        <div>
        <Paper elevation={3} className={classes.container}>
        <TextField className={classes.textField} id="filled-basic" label="Filled" variant="filled" />
        </Paper>
        </div>
    )
}
