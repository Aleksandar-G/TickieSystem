package com.tickieSystem.tickieSystem.logic;

import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.service.TicketUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TicketUtilsTest {

    List<Ticket> testData = new ArrayList<>();

    Ticket t1 = new Ticket("test","High",new Date(1),"Senior");
    Ticket t2 = new Ticket("test","Low",new Date(3),"Junior");
    Ticket t3 = new Ticket("test","Medium",new Date(2),"Intern");

    @Autowired
    TicketUtils ticketUtils;


    @BeforeEach
    void setUp() {

        ticketUtils = new TicketUtils();

        testData.add(t1);
        testData.add(t2);
        testData.add(t3);
    }

    @Test
    void arrangeTicketsByPriority() {

        List<Ticket> res = ticketUtils.ArrangeTicketsByPriority(testData);

        assertEquals(testData.get(0),res.get(0));
    }

    @Test
    void arrangeTicketsByDate() {
        List<Ticket> res = ticketUtils.ArrangeTicketsByDate(testData);

        assertEquals(testData.get(0),res.get(0));
    }

    @Test
    void getTicketsByDifficulty() {
        List<Ticket> res = ticketUtils.GetTicketsByDifficulty(testData, "Intern");

        assertEquals(testData.get(2),res.get(0));
    }
}