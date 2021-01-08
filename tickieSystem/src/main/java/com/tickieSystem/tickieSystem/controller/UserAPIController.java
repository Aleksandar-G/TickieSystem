package com.tickieSystem.tickieSystem.controller;


import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import com.tickieSystem.tickieSystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping(path="db/user/")
public class UserAPIController {

    @Autowired
    CorsFilter corsFilter;

    @Autowired
    private UserService userService;


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

    @PostMapping(path = "add")
    public ResponseEntity addTicket(@RequestBody User user){
        try {
            userService.saveTicket(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(null);
        }catch(Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping(path = "/alluserName")
    public List<String> getAllUserNames(){
        List<User> users = (List<User>) userService.findAll();
        List <String> userNames = new ArrayList<>();
        for (User u : users) {
            userNames.add(u.getName());
        }
        return userNames;
    }



    private User getUserByUsername(String username){

        Optional<User> u = userService.findByname(username);

        if (u.isPresent()){
            User user = u.get();
            return user;
        }
        else{
            throw new IllegalArgumentException("User not found");
        }
    }
}
