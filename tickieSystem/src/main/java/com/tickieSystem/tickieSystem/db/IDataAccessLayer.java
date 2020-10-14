package com.tickieSystem.tickieSystem.db;

import com.tickieSystem.tickieSystem.models.Ticket;
import com.tickieSystem.tickieSystem.controller.TicketController;

import java.util.ArrayList;
import java.util.List;

public interface IDataAccessLayer {
    List<Ticket> getAllTickets();
    void addTicket(Ticket newTicket);
    boolean deleteTicket(String ticketID);
    void editTicket(String ticketID);
    Ticket getTicket(String ticketID);
    List<Ticket> getTicketsWithDifficulty(String difficulty);
    List<Ticket> getTicketsWithPriority(String Difficulty);
}
