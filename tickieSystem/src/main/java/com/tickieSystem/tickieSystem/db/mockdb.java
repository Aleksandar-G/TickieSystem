package com.tickieSystem.tickieSystem.db;

import com.tickieSystem.tickieSystem.models.Ticket;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class mockdb implements IDataAccessLayer {
    private List<Ticket> tickets = new ArrayList<Ticket>();
    public mockdb(){
        Ticket ticket = new Ticket("1","SampleDesc", LocalDate.now(),"Low","intern");
        Ticket ticket2 = new Ticket("2","TstTest",LocalDate.now(),"High","senior");
        Ticket ticket3 = new Ticket("3","MockdbDesc",LocalDate.now(),"Low","junior");


        tickets.add(ticket);
        tickets.add(ticket2);
        tickets.add(ticket3);

    }

    @Override
    public List<Ticket> getAllTickets() {

        return tickets;
    }

    @Override
    public void addTicket(Ticket newTicket) {
        tickets.add(newTicket);
    }

    @Override
    public boolean deleteTicket(String ticketID) {
        boolean deleted =false;
        Ticket ticketTodelete = null;
        for (Ticket t:tickets) {
            if (t.ID.equals(ticketID)){
                deleted = true;
                ticketTodelete = t;
                break;
            }
        }
        tickets.remove(ticketTodelete);
        return deleted;
    }

    @Override
    public void editTicket(String ticketID) {
        //TO DO
    }

    @Override
    public Ticket getTicket(String ticketID) {
        for (Ticket t:tickets) {
            if (t.ID.equals(ticketID)){
                return t;
            }
        }

        return null;
    }

    @Override
    public List<Ticket> getTicketsWithDifficulty(String difficulty) {
        return null;
    }

    @Override
    public List<Ticket> getTicketsWithPriority(String Difficulty) {
        return null;
    }
}
