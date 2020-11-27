package com.tickieSystem.tickieSystem.service;


import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;



}
