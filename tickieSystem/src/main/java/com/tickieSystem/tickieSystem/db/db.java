package com.tickieSystem.tickieSystem.db;

import com.tickieSystem.tickieSystem.db.remote.models.Ticket;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class db implements IDataAccessLayer {
    private List<Ticket> tickets = new ArrayList<Ticket>();

    public db(){

        /*Ticket ticket = new Ticket("1","description",LocalDate.now(),"High","intern");
        Ticket ticket2 = new Ticket("2","description",LocalDate.now(),"High","senior");
        Ticket ticket3 = new Ticket("3","NewDescription",LocalDate.now(),"Low","junior");
        Ticket ticket4 = new Ticket("4","NewDescriptionTest",LocalDate.now(),"Low","junior");
        Ticket ticket5 = new Ticket("5","NewDescriptionTestFeedbackSession",LocalDate.now(),"HIgh","junior");

        tickets.add(ticket);
        tickets.add(ticket2);
        tickets.add(ticket3);
        tickets.add(ticket4);
        tickets.add(ticket5);*/
    }

    @Override
    public List<Ticket> getAllTickets() {
        return tickets;
    }

    @Override
    public void addTicket(Ticket ticket){

        tickets.add(ticket);
    }

    @Override
    public boolean deleteTicket(String ticketID) {
        return false;
    }

    @Override
    public void editTicket(String ticketID) {

    }

    @Override
    public Ticket getTicket(String ticketID) {
        return null;
    }

    public Ticket getTicket(Integer id){
        Ticket res = tickets.stream().filter(x -> x.getId().equals(id)).findFirst().orElse(null);

        return res;
    }

    @Override
    public List<Ticket> getTicketsWithDifficulty(String difficulty) {
        return null;
    }

    @Override
    public List<Ticket> getTicketsWithPriority(String Difficulty) {
        return null;
    }

    public List<Ticket> getTicketWithDiffuculty(String diff){
        List<Ticket> res = new ArrayList<Ticket>();
        for (Ticket t : tickets){
            if (t.getDifficulty().equals(diff)){
                res.add(t);
            }
        }

        return res;
    }
}
