package com.tickieSystem.tickieSystem.logic;

import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    public Iterable<Ticket> findAll(){
        return ticketRepository.findAll();
    }

    public Ticket FindAllbyId(Integer id){
       Optional<Ticket> optionalTicket =  ticketRepository.findById(id);

       return GetTicketFromOptional(optionalTicket);
    }

    public void saveTicket(Ticket ticket){
        ticketRepository.save(ticket);
    }



    private Ticket GetTicketFromOptional(Optional<Ticket> optTicket){

        if (optTicket.isPresent()){
            Ticket res = optTicket.get();
            return res;
        }
        else{
            throw new IllegalArgumentException("User not found");
        }
    }

}
