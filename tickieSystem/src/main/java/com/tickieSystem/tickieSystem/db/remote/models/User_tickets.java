package com.tickieSystem.tickieSystem.db.remote.models;


import javax.persistence.*;

@Entity
@Table(name = "user_tickets")
public class User_tickets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private Integer userid;
    private Integer ticketid;

    public User_tickets(Integer user_id, Integer ticket_id) {
        this.userid = user_id;
        this.ticketid = ticket_id;
    }

    public Integer getUser_id() {
        return userid;
    }

    public void setUser_id(Integer user_id) {
        this.userid = user_id;
    }

    public Integer getTicket_id() {
        return ticketid;
    }

    public void setTicket_id(Integer ticket_id) {
        this.ticketid = ticket_id;
    }

    public User_tickets() {

    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }


}
