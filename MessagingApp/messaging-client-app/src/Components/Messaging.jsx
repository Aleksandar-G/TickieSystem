import React, {useEffect,useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RenderMessages from '../Components/RenderMessages';


let stompClient = null;

  const onError = (error) => {
    
  }

const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(3),
      minWidth: 120,
      boxSizing: 'border-box',
      height: '80vh',
      zIndex: '-1'
      

    },
    textField: {
        position: "relative",
        marginLeft:theme.spacing(3),
        float:"left", 
        width:'78%',
        zIndex: '1'
    },
    button:{
      position: "relative",
        float:"right", 
        marginRight:theme.spacing(3),
        width:'18%',
        zIndex: '1',
        padding: theme.spacing(2)
    },
    div:{
      position: "absolute",
      backgroundColor: 'grey',
      float:'right',
      width:'100%',
      marginRight:theme.spacing(3)
    }
  }));


export default function Messaging() {

  let [messageCount, setmessageCount] = useState(0);
  const [messages, setmessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  let [username, setusername] = useState('')

  



  const connect = (userName) => {

    userName = sessionStorage.getItem("user");
    setusername(userName);

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

      setNewMessage(message);
      setmessageCount(messageCount++);

      let m = newMessage;
      let a = messages;

      let ah = messages;
      ah.push(message);

      ah.forEach(element => {
        setmessages([...messages,{element}]);
      });

   
    }
      
   }

  const onConnected = () => {

    // Subscribing to the public topic
    stompClient.subscribe('/topic/pubic', onMessageReceived);
  
    // Registering user to server as a public chat user
    stompClient.send("/app/addUser", {}, JSON.stringify({ sender: sessionStorage.getItem("user") ,message:'JOIN' }))
  
  }

  const sendMessage = () => {
    if (stompClient) {
      let chatMessage = {
        sender: username,
        message: newMessage
  
      };
      // send public message
      stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));

      setNewMessage('');

    }
  }

  const handleMessageChange =(event) =>{

    setNewMessage(event.target.value)
  }

  useEffect(() => {
    setusername(sessionStorage.getItem("user").toString())
    connect(username);

  },[])

  useEffect(() => {

  }, [messageCount])

  

    const classes = useStyles();

    return (
        <div>
        <Paper elevation={3} className={classes.container}>
        <Grid container spacing={3}>
        <RenderMessages messages={messages} />
        </Grid>
        </Paper>

        <TextField onChange={(event) => handleMessageChange(event)} className={classes.textField} id="filled-basic" label="Filled" variant="filled" />
        <Button className={classes.button} variant="outlined" color="primary" onClick={() => sendMessage()}>Send</Button>
        </div>
    )
}
