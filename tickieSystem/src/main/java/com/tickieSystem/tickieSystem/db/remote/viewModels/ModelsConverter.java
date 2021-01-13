package com.tickieSystem.tickieSystem.db.remote.viewModels;

import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;

import java.util.ArrayList;
import java.util.List;

public class ModelsConverter {

    public static TicketView TicketToView(Ticket t){
         return  new TicketView(t.getId(),t.getDescription(),t.getPriority(),t.getDuedate(),t.getDifficulty(),t.isClaimed());
    }

    public static List<TicketView> TicketsToView(List<Ticket> t){

        List<TicketView> res = new ArrayList<>();

        for (Ticket ticket : t) {
            res.add(new TicketView(ticket.getId(),ticket.getDescription(),ticket.getPriority(),ticket.getDuedate(),ticket.getDifficulty(),ticket.isClaimed()));
        }

        return res;
    }

    public static List<ClosedTicketView> ClosedTicketsToView(List<ClosedTicket> t){

        List<ClosedTicketView> res = new ArrayList<>();

        for (ClosedTicket ticket : t) {
            res.add(new ClosedTicketView(ticket.getId(),ticket.getTicketid(),ticket.getUserid()));
        }

        return res;
    }

}
