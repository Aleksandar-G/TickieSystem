package com.tickieSystem.tickieSystem.db;

import com.tickieSystem.tickieSystem.models.Ticket;

import java.util.ArrayList;
import java.util.List;

public class db {
    private List<Ticket> tickets = new ArrayList<Ticket>();

    public db(){

        Ticket ticket = new Ticket("1","test ticket","test level","test difficuly_level");
        Ticket ticket2 = new Ticket("2","nice one","eazy","not difficult");

        tickets.add(ticket);
        tickets.add(ticket2);
    }

    public List<Ticket> getTickets(){
        return  this.tickets;
    }

    public void addTicket(Ticket ticket){

        tickets.add(ticket);
    }

    public boolean deleteTicket(String ticektId){
        if (tickets.remove(tickets.stream().filter(x -> x.ID.equals(ticektId)).findFirst().get())){
            return true;
        }else{
            return false;
        }
    }

    public Ticket getTicket(String id){
        Ticket res = tickets.stream().filter(x -> x.ID.equals(id)).findFirst().orElse(null);

        return res;
    }

    public List<Ticket> getTicketWithDiffuculty(String diff){
        List<Ticket> res = new ArrayList<Ticket>();
        for (Ticket t : tickets){
            if (t.DifficultyLevel.equals(diff)){
                res.add(t);
            }
        }

        return res;
    }
}
