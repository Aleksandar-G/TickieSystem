package com.tickieSystem.tickieSystem.db.remote.models;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "close_tickets")
public class ClosedTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private int ticketid;
    private int userid;
    private Date closedDate;

    public ClosedTicket() {
    }



    public ClosedTicket(Integer ticketid, Integer userid) {
        this.ticketid = ticketid;
        this.userid = userid;
        this.closedDate = new Date(System.currentTimeMillis());

    }

    public int getId() {
        return Id;
    }

    public Integer getTicketid() {
        return ticketid;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
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
