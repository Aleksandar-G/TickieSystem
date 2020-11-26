package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.sql.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(TicketAPIController.class)
class TicketAPIControllerTest {



    @MockBean
    private TicketRepository ticketRepository;


    @Test
    void getAlltickets() throws Exception{
        RequestBuilder request = MockMvcRequestBuilders.get("/db/tickets/all");
        MvcResult result = mvc.perform(request).andReturn(/*Stream.of(new Ticket("testData","High",new Date(1),"Intern")).collect(Collectors.toList())*/);
    }
}