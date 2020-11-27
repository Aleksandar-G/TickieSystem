package com.tickieSystem.tickieSystem.service;

import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class TicketServiceTest {


    List<Ticket> testData = new ArrayList<>();

    Ticket t1 = new Ticket("test","High",new Date(1),"Senior");
    Ticket t2 = new Ticket("test","Low",new Date(2),"Junior");
    Ticket t3 = new Ticket("test","Medium",new Date(3),"Intern");



    @InjectMocks
    TicketService ticketService;

    @Mock
    TicketRepository ticketRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        testData.add(t1);
        testData.add(t2);
        testData.add(t3);
    }

    @Test
    void findAll() {



        when(ticketRepository.findAll()).thenReturn(testData);

        assertEquals(3, ((List<Ticket>) ticketService.findAll()).size());
    }

    @Test
    void findbyId() {
        when(ticketRepository.findById(1)).thenReturn(java.util.Optional.ofNullable(testData.get(1)));

        assertEquals(testData.get(1).getId(),ticketService.findbyId(1).getId());
    }

}