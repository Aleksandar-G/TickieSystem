package com.tickieSystem.tickieSystem.db.remote.models;


import javax.persistence.*;

@Entity
@Table(name ="CloseTickets")
public class CloseTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private Integer TicketId;

    public CloseTicket(){

    }

    public Integer getId() {
        return id;
    }

    public CloseTicket(Integer userId, Integer ticketId) {
        this.userId = userId;
        TicketId = ticketId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getTicketId() {
        return TicketId;
    }

    public void setTicketId(Integer ticketId) {
        TicketId = ticketId;
    }


}
