package com.tickieSystem.tickieSystem.db.remote.viewModels;

public class User_ticketsView {

    private int Id;
    private Integer userid;
    private Integer ticketid;

    public User_ticketsView() {
    }

    public User_ticketsView(Integer userid, Integer ticketid) {
        this.userid = userid;
        this.ticketid = ticketid;
    }


    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getTicketid() {
        return ticketid;
    }

    public void setTicketid(Integer ticketid) {
        this.ticketid = ticketid;
    }
}
