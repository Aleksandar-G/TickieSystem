package com.tickieSystem.tickieSystem.db.remote.viewModels;

public class ClosedTicketView {

    private int Id;
    private int ticketid;
    private int userid;

    public ClosedTicketView() {
    }

    public ClosedTicketView(int id, int ticketid, int userid) {
        Id = id;
        this.ticketid = ticketid;
        this.userid = userid;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getTicketid() {
        return ticketid;
    }

    public void setTicketid(int ticketid) {
        this.ticketid = ticketid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }
}
