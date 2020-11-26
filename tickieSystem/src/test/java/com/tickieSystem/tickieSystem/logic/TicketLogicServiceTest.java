package com.tickieSystem.tickieSystem.logic;

import org.junit.jupiter.api.Test;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TicketLogicServiceTest {


    List<Ticket> testdata = new ArrayList();

    public TicketLogicServiceTest(){

        Ticket t1 = new Ticket("testData","High",new Date(1),"Intern");
        Ticket t2 = new Ticket("testData","Low",new Date(3),"Junior");
        Ticket t3 = new Ticket("testData","Medium",new Date(2),"Senior");


        testdata.add(t1);
        testdata.add(t2);
        testdata.add(t3);

    }

    TicketLogicService ticketLogicService = new TicketLogicService();



    @Test
    void arrangeTicketsByPriority() {


        List<Ticket> result = ticketLogicService.ArrangeTicketsByPriority(testdata);

        assertEquals(testdata.get(0),result.get(0) );

    }

    @Test
    void arrangeTicketsByDate() {
        List<Ticket> result = ticketLogicService.ArrangeTicketsByDate(testdata);

        assertEquals(testdata.get(0),result.get(0));
    }

    @Test
    void getTicketsByDifficulty() {
        List<Ticket> result = ticketLogicService.GetTicketsByDifficulty(testdata,"Senior");

        assertEquals(result.size(),1);
        assertEquals( testdata.get(2),result.get(0));
    }

}