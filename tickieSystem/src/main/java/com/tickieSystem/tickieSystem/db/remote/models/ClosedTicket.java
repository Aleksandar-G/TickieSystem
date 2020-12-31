package com.tickieSystem.tickieSystem.db.remote.models;

import javax.persistence.*;

@Entity
@Table(name = "close_tickets")
public class ClosedTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private int ticketid;
    private int userid;

    public ClosedTicket() {
    }

    public ClosedTicket(Integer ticketid, Integer userid) {
        this.ticketid = ticketid;
        this.userid = userid;
    }

    public Integer getTicketid() {
        return ticketid;
    }

    public void setTicketid(Integer ticketid) {
        this.ticketid = ticketid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }
}
