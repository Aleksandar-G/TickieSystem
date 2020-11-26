package com.tickieSystem.tickieSystem.logic;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;

import java.util.ArrayList;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.springframework.stereotype.Service;

public class TicketLogicService {
    
    public TicketLogicService(){};
    
    public List<Ticket> ArrangeTicketsByPriority(List<Ticket> tickets){

        List<Ticket> result;
        result = tickets.stream().sorted(Comparator.comparing(ticket -> ticket.getPriority())).collect(Collectors.toList());

        return result;
    }

    public List<Ticket> ArrangeTicketsByDate(List<Ticket> tickets){
        List<Ticket> result;
        result = tickets.stream().sorted(Comparator.comparing(ticket -> ticket.getDuedate())).collect(Collectors.toList());

        return result;
    }
    public List<Ticket> GetTicketsByDifficulty(List<Ticket> tickets,String difficultyLevel){
        List<Ticket> result;

        result = tickets.stream().filter(x -> x.getDifficulty().equals(difficultyLevel)).collect(Collectors.toList());

        return  result;
    }
    
}
