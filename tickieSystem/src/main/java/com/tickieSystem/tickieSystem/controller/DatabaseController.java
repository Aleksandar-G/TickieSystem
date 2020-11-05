package com.tickieSystem.tickieSystem.controller;


import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.fasterxml.jackson.databind.util.JSONWrappedObject;
import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;


@Controller // This means that this class is a Controller
@RequestMapping(path="/db") // This means URL's start with /demo (after Application
/*@CrossOrigin(origins = "http://localhost:3000")*/
@CrossOrigin()
public class DatabaseController {

    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }


    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private User_TicketsRepository user_ticketsRepository;

   /* @PostMapping(path="/users/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String level) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        User n = new User();
        n.setName(name);
        n.setLevel(level);
        userRepository.save(n);
        return "Saved";
    }*/

    @GetMapping(path="/tickets/all")
    public @ResponseBody Iterable<Ticket> getAllTickets() {
        // This returns a JSON or XML with the users
        return ticketRepository.findAll();
    }
    @GetMapping(value="/tickets")
    public @ResponseBody  Optional<Ticket> getTicket(@RequestParam(value = "id", required = false)String id) {
        // This returns a JSON or XML with the users
        Optional<Ticket> res = null;

        if (id != null){
           res = ticketRepository.findById(Integer.parseInt(id));
        }else{
            res = ticketRepository.findById(1);
        }
        return  res;
    }
    @PostMapping(path = "tickets/add")
    public void addTicket(@RequestBody Ticket ticket){
        ticketRepository.save(ticket);
    }

    @PostMapping(path = "/tickets/assign")
    public ResponseEntity assignTicket(@RequestBody Map<String, Object> utObj){

       String username = utObj.get("username").toString();
       Integer ticketId = Integer.parseInt(utObj.get("ticketId").toString());
        Optional<User> u = userRepository.findByname(username);

       if (u.isPresent()){
           User user = u.get();
           User_tickets entry = new User_tickets(user.getId(),ticketId);
           user_ticketsRepository.save(entry);
       }
       else{
           throw new IllegalArgumentException("User not found");
       }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping(path = "/tickets/test")
    public void test(@RequestBody User_tickets ticketId){
        user_ticketsRepository.save(ticketId);
    }

}
