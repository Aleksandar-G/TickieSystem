package com.tickieSystem.tickieSystem.service;

import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class User_ticketsService {

    @Autowired
    User_TicketsRepository user_ticketsRepository;


    public List<User_tickets> findallByuserId(Integer userId){return user_ticketsRepository.findAllByUserid(userId);}

    public void save(User_tickets ut){user_ticketsRepository.save(ut);}

    public void deleteByUseridAndTicketid(Integer userId, Integer ticketId){user_ticketsRepository.deleteByUseridAndTicketid(userId,ticketId);}



}
