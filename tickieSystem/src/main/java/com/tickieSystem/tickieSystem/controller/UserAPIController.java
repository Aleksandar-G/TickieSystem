package com.tickieSystem.tickieSystem.controller;


import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/user")
public class UserAPIController {

    @Autowired
    CorsFilter corsFilter;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private User_TicketsRepository user_TicketsRepository;

    @GetMapping(path="/isadmin")
    @ResponseBody
    public String userCheck(@RequestParam(value = "username", required = false)String username){

      User u = this.getUserByUsername(username);

      if (u.getLevel().equals("Senior")){
          return "admin";
      }
      else{
          return "user";
      }
    }

    private User getUserByUsername(String username){

        Optional<User> u = userRepository.findByname(username);

        if (u.isPresent()){
            User user = u.get();
            return user;
        }
        else{
            throw new IllegalArgumentException("User not found");
        }
    }
}
