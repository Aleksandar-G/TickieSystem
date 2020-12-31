package com.tickieSystem.tickieSystem.service;

import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class UserServiceTest {

    List<User> testData = new ArrayList<>();

    User u1 = new User("test","Junior");
    User u2 = new User("test1","Senior");
    User u3 = new User("test2","Intern");

    @InjectMocks
    UserService userService;

    @Mock
    UserRepository userRepository;

    @BeforeEach
    void setUp() {

        MockitoAnnotations.initMocks(this);

        testData.add(u1);
        testData.add(u2);
        testData.add(u3);
    }

    @Test
    void findAll() {

        when(userRepository.findAll()).thenReturn(testData);

        assertEquals(3, ((List<User>) userService.findAll()).size());
    }

    @Test
    void findbyUsername() {
        when(userRepository.findByname("test1")).thenReturn(java.util.Optional.ofNullable(testData.get(1)));

        assertEquals(testData.get(1).getName(),userService.findbyUsername("test1").getName());
    }

}