package com.tickieSystem.tickieSystem.db.remote.models;


import javax.persistence.*;

@Entity
@Table(name = "user_tickets")
public class User_tickets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private Integer user_id;
    private Integer ticket_id;

    public User_tickets(Integer user_id, Integer ticket_id) {
        this.user_id = user_id;
        this.ticket_id = ticket_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(Integer ticket_id) {
        this.ticket_id = ticket_id;
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
