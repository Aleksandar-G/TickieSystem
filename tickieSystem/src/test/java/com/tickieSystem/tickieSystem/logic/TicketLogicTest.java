package com.tickieSystem.tickieSystem.logic;

import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class TicketLogicTest {

    List<Ticket> testData = new ArrayList<>();

    Ticket t1 = new Ticket("test","High",new Date(1),"Senior");
    Ticket t2 = new Ticket("test","Low",new Date(3),"Junior");
    Ticket t3 = new Ticket("test","Medium",new Date(2),"Intern");


    TicketLogic ticketLogic;


    @BeforeEach
    void setUp() {

        ticketLogic = new TicketLogic();

        testData.add(t1);
        testData.add(t2);
        testData.add(t3);
    }

    @Test
    void arrangeTicketsByPriority() {

        List<Ticket> res = ticketLogic.ArrangeTicketsByPriority(testData);

        assertEquals(testData.get(0),res.get(0));
    }

    @Test
    void arrangeTicketsByDate() {
        List<Ticket> res = ticketLogic.ArrangeTicketsByDate(testData);

        assertEquals(testData.get(0),res.get(0));
    }

    @Test
    void getTicketsByDifficulty() {
        List<Ticket> res = ticketLogic.GetTicketsByDifficulty(testData, "Intern");

        assertEquals(testData.get(2),res.get(0));
    }
}