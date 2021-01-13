package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import com.tickieSystem.tickieSystem.db.remote.viewModels.ClosedTicketView;
import com.tickieSystem.tickieSystem.db.remote.viewModels.ModelsConverter;
import com.tickieSystem.tickieSystem.db.remote.viewModels.TicketView;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import com.tickieSystem.tickieSystem.service.CloseTicketService;
import com.tickieSystem.tickieSystem.service.TicketService;
import com.tickieSystem.tickieSystem.service.UserService;
import com.tickieSystem.tickieSystem.service.User_ticketsService;
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
    UserService userService;

    @Autowired
    CloseTicketService closeTicketService;

    @Autowired
    User_ticketsService user_ticketsService;





    @GetMapping(path="/tickets/all")
    public @ResponseBody Iterable<TicketView> getAllTickets() {
        // This returns a JSON or XML with the users
        List<Ticket> tickets = (List<Ticket>) ticketService.findAll();
        tickets = tickets.stream().filter(x -> !x.isClaimed()).sorted(Comparator.comparing(x -> x.getDuedate())).collect(Collectors.toList());

       return ModelsConverter.TicketsToView(tickets);

        //return tickets;
    }

    @GetMapping(value="/tickets")
    public @ResponseBody List<TicketView> getTicketsForUser(@RequestParam(value = "username", required = true)String username) {
        // This returns a JSON or XML with the users

        User u = getUserByUsername(username);

        List<User_tickets> ut = user_ticketsService.findallByuserId(u.getId());
        //assert ut != null;
        List<Integer> utInt = ut.stream().map(User_tickets::getTicket_id).collect(Collectors.toList());
        Iterable<Integer>ticketIds = utInt;
        Iterable<Ticket>ticketsForUser = ticketService.findAllbyId(ticketIds);
        List<Ticket> res = StreamSupport.stream(ticketsForUser.spliterator(),false).collect(Collectors.toList());
        return ModelsConverter.TicketsToView(res);
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
        User u = userService.findbyUsername(username);

       if (u.getName() != null){
           User_tickets entry = new User_tickets(u.getId(),ticketId);
           user_ticketsService.save(entry);
           ticketService.claimTicket(ticketId);
       }
       else{
           //throw new IllegalArgumentException("User not found");
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
       }

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

   @PostMapping(path = "/tickets/close")
   public ResponseEntity closeTicket(@RequestBody Map<String, String> infoCloseticket){

        Integer userId = getUserByUsername(infoCloseticket.get("username").toString()).getId();
        Integer ticketId = Integer.parseInt(infoCloseticket.get("ticketId"));
       ClosedTicket ct = new ClosedTicket(ticketId,userId);


       try {
           closeTicketService.save(ct);
           user_ticketsService.deleteByUseridAndTicketid(userId,ticketId);
           return ResponseEntity.status(HttpStatus.CREATED).body(null);
       }catch (Exception ex){
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
       }
   }

   @GetMapping(path = "tickets/order")
   public @ResponseBody List<TicketView> orderTickets(@RequestParam(value = "order", required = true)String order,String username) {

       List<TicketView> userTickets = getTicketsForUser(username);

       //userTickets = ticketLogic.ArrangeTicketsByPriority(userTickets);

       return  userTickets;

   }


   @GetMapping(path = "tickets/close")
   public List<ClosedTicketView> getCloseTicketsForUser(@RequestParam(value = "username", required = true)String username){
        User u = this.getUserByUsername(username);

        List<ClosedTicket> closedTicketsForUsers = closeTicketService.findAllByUserid(u.getId());

        return ModelsConverter.ClosedTicketsToView(closedTicketsForUsers);

        //return closedTicketsForUsers;
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
