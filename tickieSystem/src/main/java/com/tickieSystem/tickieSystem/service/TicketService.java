package com.tickieSystem.tickieSystem.service;


import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    public Iterable<Ticket> findAll(){
        return ticketRepository.findAll();
    }

    public Ticket findbyId(Integer id){
        Optional<Ticket> optionalTicket =  ticketRepository.findById(id);

        return GetTicketFromOptional(optionalTicket);
    }

    public void saveTicket(Ticket ticket){
        ticketRepository.save(ticket);
    }

    public boolean claimTicket(Integer ticketId){
        try {
            Ticket ticketToClose = GetTicketFromOptional(ticketRepository.findById(ticketId));
            if (ticketToClose.isClaimed() == false) {
                ticketToClose.setClaimed(true);
               // ticketRepository.deleteById(ticketId);
                ticketRepository.save(ticketToClose);
                return true;
            } else {
                return false;
            }
        }catch (Exception ex){
            return false;
        }
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
