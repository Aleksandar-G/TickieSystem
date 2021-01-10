package com.chat.messaging.model;

import java.sql.Date;

public class Message {

    private String Sender;
    private String Message;
    //private Date Timestamp;

    public Message() {
    }

    public void setSender(String sender) {
        Sender = sender;
    }

    public void setMessage(String message) {
        Message = message;
    }

    public Message(String sender, String message) {
        Sender = sender;
        Message = message;
        //Timestamp = timestamp;
    }

    public String getSender() {
        return Sender;
    }

    public String getMessage() {
        return Message;
    }

}
