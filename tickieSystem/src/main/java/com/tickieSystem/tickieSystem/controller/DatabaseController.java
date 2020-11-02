package com.tickieSystem.tickieSystem.controller;


import com.tickieSystem.tickieSystem.db.remote.TicketRepository;
import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import com.tickieSystem.tickieSystem.security.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path="/db") // This means URL's start with /demo (after Application

public class DatabaseController {

    @Bean
    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }


    @Autowired
    private TicketRepository ticketRepository;

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
}
