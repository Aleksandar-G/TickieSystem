package com.tickieSystem.tickieSystem.db;

import com.tickieSystem.tickieSystem.models.Ticket;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class db {
    private List<Ticket> tickets = new ArrayList<Ticket>();

    public db(){

        Ticket ticket = new Ticket("1","description",LocalDate.now(),"High","intern");
        Ticket ticket2 = new Ticket("2","description",LocalDate.now(),"High","senior");
        Ticket ticket3 = new Ticket("3","NewDescription",LocalDate.now(),"Low","junior");
        Ticket ticket4 = new Ticket("4","NewDescriptionTest",LocalDate.now(),"Low","junior");
        //Ticket ticket5 = new Ticket("5","NewDescriptionTestFeedbackSession",LocalDate.now(),"HIgh","junior");

        tickets.add(ticket);
        tickets.add(ticket2);
        tickets.add(ticket3);
        tickets.add(ticket4);
        //tickets.add(ticket5);
    }

    public List<Ticket> getTickets(){
        return  this.tickets;
    }

    public void addTicket(Ticket ticket){

        tickets.add(ticket);
    }

    public boolean deleteTicket(String ticektId){
        if (tickets.remove(tickets.stream().filter(x -> x.ID == ticektId).findFirst().get())){
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
