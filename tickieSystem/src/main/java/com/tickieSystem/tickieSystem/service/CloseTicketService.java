package com.tickieSystem.tickieSystem.service;

import com.tickieSystem.tickieSystem.db.remote.ClosedTicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CloseTicketService {

    @Autowired
    private ClosedTicketsRepository closedTicketsRepository;

    public void save(ClosedTicket closedTicket){
        closedTicketsRepository.save(closedTicket);
    }

    public List<ClosedTicket> findAllByUserid(Integer userId){
        List<ClosedTicket> closedTickets = closedTicketsRepository.findAllByUserid(userId);

        return closedTickets;
    }


}
