import React, {useEffect,useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
import Message from '../Components/Message';



let stompClient = null;

  const onError = (error) => {
    
  }

const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(3),
      minWidth: 120,
      boxSizing: 'border-box',
      height: '90vh'

    },
    textField: {
        position: "absolute",
        float:"left", 
        top:"84vh",
        width:'80%'
    },
    button:{
      position: "absolute",
        float:"right", 
        top:"84vh",
        width:'20%',
        height:'6vh',
    }
  }));


export default function Messaging() {

  const [message, setMessage] = useState('')

  const [messages, setmessages] = useState([])

  const connect = (userName) => {

    userName = "test";

    if (userName) {

      const Stomp = require('stompjs')

      let SockJS = require('sockjs-client')

      SockJS = new SockJS('http://localhost:8080/ws')

      stompClient = Stomp.over(SockJS);

      console.log(stompClient);

      stompClient.connect({}, onConnected, onError);

    }
  }

  const onMessageReceived = (payload) => {
    if (payload) {
      
      let message = JSON.parse(payload.body);

      setmessages(messages.push(message));

      console.log(messages[0]);

      
  
    }
      
   }

  const onConnected = () => {

    // Subscribing to the public topic
    stompClient.subscribe('/topic/pubic', onMessageReceived);
  
    // Registering user to server as a public chat user
    stompClient.send("/app/addUser", {}, JSON.stringify({ sender:'test' ,message:'JOIN' }))
  
  }

  const sendMessage = () => {
    if (stompClient) {
      let chatMessage = {
        sender: "test",
        message: message
  
      };

      // send public message
      stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));

      setMessage('');

    }
  }

  const handleMessageChange =(event) =>{

    setMessage(event.target.value)
  }

  useEffect(() => {
    connect("test");
  },[])

  

    const classes = useStyles();

    return (
        <div>
        <Paper elevation={3} className={classes.container}>
        <Grid container spacing={3}>
        <Message messages={message} />
        </Grid>
        <TextField zIndex="tooltip" onChange={(event) => handleMessageChange(event)} className={classes.textField} id="filled-basic" label="Filled" variant="filled" />
        <Button zIndex="modal" className={classes.button} variant="outlined" color="primary" onClick={() => sendMessage()}>Send</Button>
        </Paper>
        </div>
    )
}
