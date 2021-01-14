package com.tickieSystem.tickieSystem.serviceTest;

import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import com.tickieSystem.tickieSystem.service.User_ticketsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class User_ticketServiceTest {

    List<User_tickets> testData = new ArrayList<>();

    User_tickets ut1 = new User_tickets(1,1);
    User_tickets ut2 = new User_tickets(2,1);
    User_tickets ut3 = new User_tickets(3,2);



    @InjectMocks
    User_ticketsService user_ticketsService;

    @Mock
    User_TicketsRepository user_ticketsRepository;

    @BeforeEach
    void setUp() {

        MockitoAnnotations.initMocks(this);

        testData.add(ut1);
        testData.add(ut2);
        testData.add(ut3);
    }

    @Test
    void findallByuserIdTest(){
        when(user_ticketsRepository.findAllByUserid(1)).thenReturn(testData);

        assertEquals(3, ((List<User_tickets>) user_ticketsService.findallByuserId(1)).size());
    }


    @Test
    void saveTest(){
        when(user_ticketsRepository.save(ut1)).thenReturn(ut1);

        assertEquals(3, testData.size());
    }

}
