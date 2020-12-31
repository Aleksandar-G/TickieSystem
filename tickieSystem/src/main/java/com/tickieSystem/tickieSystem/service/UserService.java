package com.tickieSystem.tickieSystem.service;

import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {


    @Autowired
    UserRepository userRepository;

    public Iterable<User> findAll(){
        return userRepository.findAll();
    }

    public User findbyUsername(String username){
        Optional<User> optionalUser =  userRepository.findByname(username);

        return GetUserFromOptional(optionalUser);
    }

    public void saveTicket(User user){
        userRepository.save(user);
    }

    private User GetUserFromOptional(Optional<User> optTicket){

        if (optTicket.isPresent()){
            User res = optTicket.get();
            return res;
        }
        else{
            throw new IllegalArgumentException("User not found");
        }
    }
}
