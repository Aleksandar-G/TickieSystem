package com.tickieSystem.tickieSystem.serviceTest;

import com.tickieSystem.tickieSystem.db.remote.ClosedTicketsRepository;
import com.tickieSystem.tickieSystem.service.CloseTicketService;
import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class CloseTicketServiceTest {

    List<ClosedTicket> testData = new ArrayList<>();

    ClosedTicket ct1 = new ClosedTicket(1,1);
    ClosedTicket ct2 = new ClosedTicket(2,1);
    ClosedTicket ct3 = new ClosedTicket(3,2);



    @InjectMocks
    CloseTicketService closeTicketService;

    @Mock
    ClosedTicketsRepository closedTicketsRepository;

    @BeforeEach
    void setUp() {

        MockitoAnnotations.initMocks(this);

        testData.add(ct1);
        testData.add(ct2);
        testData.add(ct2);
    }

    @Test
    void findAllByUserid() {

        when(closedTicketsRepository.findAllByUserid(1)).thenReturn(testData);

        assertEquals(3, ((List<ClosedTicket>) closeTicketService.findAllByUserid(1)).size());
    }

}
