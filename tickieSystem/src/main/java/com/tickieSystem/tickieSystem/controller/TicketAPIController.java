package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.remote.*;
import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import com.tickieSystem.tickieSystem.logic.TicketLogic;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import com.tickieSystem.tickieSystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Controller // This means that this class is a Controller
@RequestMapping(path="/db") // This means URL's start with /demo (after Application
@CrossOrigin(origins = "http://localhost:3000")
public class TicketAPIController {

    @Autowired
    CorsFilter corsFilter;

    @Autowired
    TicketService ticketService;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClosedTicketsRepository closedticketsRepository;

    @Autowired
    private User_TicketsRepository user_TicketsRepository;

    @Autowired
    TicketLogic ticketLogic;

    @Autowired
    ClosedTicketsRepository closedTicketsRepository;



    @GetMapping(path="/tickets/all")
    public @ResponseBody Iterable<Ticket> getAllTickets() {
        // This returns a JSON or XML with the users
        List<Ticket> tickets = (List<Ticket>) ticketRepository.findAll();
        tickets = tickets.stream().filter(x -> !x.isClaimed()).sorted(Comparator.comparing(x -> x.getDuedate())).collect(Collectors.toList());
        return tickets;
    }

    @GetMapping(value="/tickets")
    public @ResponseBody List<Ticket> getTicketsForUser(@RequestParam(value = "username", required = true)String username) {
        // This returns a JSON or XML with the users

        User u = getUserByUsername(username);

        List<User_tickets> ut = user_TicketsRepository.findAllByUserid(u.getId());
        //assert ut != null;
        List<Integer> utInt = ut.stream().map(User_tickets::getTicket_id).collect(Collectors.toList());
        Iterable<Integer>ticketIds = utInt;
        Iterable<Ticket>ticketsForUser = ticketRepository.findAllById(ticketIds);
        List<Ticket> res = StreamSupport.stream(ticketsForUser.spliterator(),false).collect(Collectors.toList());
        return res;
    }
    @PostMapping(path = "/tickets/add")
    public ResponseEntity addTicket(@RequestBody Ticket ticket){
        try {
            ticketService.saveTicket(ticket);
            return ResponseEntity.status(HttpStatus.CREATED).body(null);
        }catch(Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
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
           ticketService.claimTicket(ticketId);
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

   @PostMapping(path = "/tickets/close")
   public ResponseEntity closeTicket(@RequestBody Map<String, String> infoCloseticket){

        Integer userId = getUserByUsername(infoCloseticket.get("username").toString()).getId();
        Integer ticketId = Integer.parseInt(infoCloseticket.get("ticketId"));
       /*CloseTicket ct = new CloseTicket(userId,ticketId);
       closeTicketsRepository.saveAndFlush(ct);*/
       ClosedTicket ct = new ClosedTicket(ticketId,userId);


       try {
           closedticketsRepository.save(ct);
           user_TicketsRepository.deleteByUseridAndTicketid(userId,ticketId);
           return ResponseEntity.status(HttpStatus.CREATED).body(null);
       }catch (Exception ex){
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
       }
   }

   @GetMapping(path = "tickets/order")
   public @ResponseBody List<Ticket> orderTickets(@RequestParam(value = "order", required = true)String order,String username) {

        List<Ticket> userTickets = getTicketsForUser(username);

       userTickets = ticketLogic.ArrangeTicketsByPriority(userTickets);

       return  userTickets;

   }

   /*@GetMapping(path = "tickets/close")
   public List<ClosedTicket> getCloseTicketsForUser(@RequestParam(value = "username", required = true)String username){
        User u = this.getUserByUsername(username);

        List<ClosedTicket> closedTicketsForUsers = closedTicketsRepository.findAllbyUserid(u.getId());

        return closedTicketsForUsers;
   }*/


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
