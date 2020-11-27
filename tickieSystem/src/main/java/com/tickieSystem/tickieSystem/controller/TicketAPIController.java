package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Controller // This means that this class is a Controller
@RequestMapping(path="/db") // This means URL's start with /demo (after Application
//@CrossOrigin(origins = "http://localhost:3000")

public class TicketAPIController {

    /*@Bean
    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }*/
//jUnit

    @Autowired
    CorsFilter corsFilter;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private User_TicketsRepository user_TicketsRepository;

    @GetMapping(path="/tickets/all")
    public @ResponseBody Iterable<Ticket> getAllTickets() {
        // This returns a JSON or XML with the users
        return ticketRepository.findAll();
    }
    /*@GetMapping(value="/tickets")
    public @ResponseBody  Optional<Ticket> getTicket(@RequestParam(value = "id", required = false)String id) {
        // This returns a JSON or XML with the users
        Optional<Ticket> res = null;

        if (id != null){
           res = ticketRepository.findById(Integer.parseInt(id));
        }else{
            res = ticketRepository.findById(1);
        }
        return  res;
    }*/
    @GetMapping(value="/tickets")
    public @ResponseBody List<Ticket> getTicketsForUser(@RequestParam(value = "username", required = false)String username) {
        // This returns a JSON or XML with the users

        User u = getUserByUsername(username);

        List<User_tickets> ut = user_TicketsRepository.findAllByUserid(u.getId());
        //assert ut != null;
        List<Integer> utInt = ut.stream().map(User_tickets::getId).collect(Collectors.toList());
        Iterable<Integer>ticketIds = utInt;
        Iterable<Ticket>ticketsForUser = ticketRepository.findAllById(ticketIds);
        List<Ticket> res = StreamSupport.stream(ticketsForUser.spliterator(),false).collect(Collectors.toList());
        return res;
    }
    @PostMapping(path = "/tickets/add")
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
           user_TicketsRepository.save(entry);
       }
       else{
           throw new IllegalArgumentException("User not found");
       }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

   @GetMapping(path = "user/isadmin")
    public boolean userIsAdmin(@RequestBody String username){
        User u = getUserByUsername(username);
        if (u.getLevel().equals("senior")){
            return true;
        }else{
            return false;
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
