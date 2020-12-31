import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

var stompClient = null;
export default class ChatComponent extends Component {


  componentDidMount(){
    //debugger;
    this.connect(sessionStorage.getItem("authenticatedUser"));
  }

    connect = (userName) => {

        if (userName) {
    
          let Stomp = require('stompjs')
          //debugger;
          let SockJS = require('sockjs-client')
            
          SockJS = new SockJS('http://localhost:8080/ws',null,{
            transports: ['xhr-streaming'], 
            headers:{'Authentication:': sessionStorage.getItem('token')}
          })
    
          stompClient = Stomp.over(SockJS);

          stompClient.connect({'token': sessionStorage.getItem('token')}, this.onConnected, this.onError);
          //debugger;
         /* this.setState({
            username: userName,
          })*/
        }
      }
    
      onConnected = () => {
    
    
        // Subscribing to the public topic
        stompClient.subscribe('/topic',{'Authentication': sessionStorage.getItem('token')});
    
        // Registering user to server as a public chat user
        //stompClient.send("/app/addUser", {}, JSON.stringify({ sender: this.state.username, type: 'JOIN' }))
    
      }
    
      /*sendMessage = (type, value) => {
    
        if (stompClient) {
          var chatMessage = {
            sender: this.state.username,
            content: type === 'TYPING' ? value : value,
            type: type
    
          };
          // send public message
          stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
        }
      }
    
      onMessageReceived = (payload) => {
    
        var message = JSON.parse(payload.body);
    
        if (message.type === 'JOIN') {
    
          this.state.roomNotification.push({ 'sender': message.sender + " ~ joined", 'status': 'online', 'dateTime': message.dateTime })
          this.setState({
            roomNotification: this.state.roomNotification,
            bellRing: true
          })
    
        }
        else if (message.type === 'LEAVE') {
          this.state.roomNotification.map((notification, i) => {
            if (notification.sender === message.sender + " ~ joined") {
              notification.status = "offline";
              notification.sender = message.sender + " ~ left";
              notification.dateTime = message.dateTime;
            }
          })
          this.setState({
            roomNotification: this.state.roomNotification,
            bellRing: true
          })
        }
        else if (message.type === 'TYPING') {
    
          this.state.roomNotification.map((notification, i) => {
            if (notification.sender === message.sender + " ~ joined") {
              if (message.content)
                notification.status = "typing...";
              else
                notification.status = "online";var
            }
    
          })
          this.setState({
            roomNotification: this.state.roomNotification
          })
        }
        else if (message.type === 'CHAT') {
    
          this.state.roomNotification.map((notification, i) => {
            if (notification.sender === message.sender + " ~ joined") {
              notification.status = "online";
            }
          })
          this.state.broadcastMessage.push({
            message: message.content,
            sender: message.sender,
            dateTime: message.dateTime
          })
          this.setState({
            broadcastMessage: this.state.broadcastMessage,
    
          })
        }
        else {
          // do nothing...
        }
      }*/


    render() {
        return (
            <div>
            <Paper elevation={5}>
                <input type="text" id="fname" name="fname"/>
                <button type="button" id="send" />
              </Paper>
            </div>
        )
    }
}
