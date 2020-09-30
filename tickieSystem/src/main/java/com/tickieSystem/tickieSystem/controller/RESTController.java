package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.db;
import com.tickieSystem.tickieSystem.models.Ticket;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RESTController {
    //private final AtomicLong counter = new AtomicLong();
    private static final db db = new db();

    @GetMapping("/tickets")
    public List<Ticket> Getticket (@RequestParam(value = "id", required = false)String id){
        List<Ticket> result = new ArrayList<>();

        if (id == null)
        {
            result.addAll(db.getTickets());
        }
        else {
            result.add(db.getTicket(id));
        }
        return result;
    }
    @PostMapping(path = "/ticket", consumes = "application/json")
    public void PostTicket(@RequestBody Ticket ticket){
            db.addTicket(ticket);
    }
    @DeleteMapping("/ticket/{id}")
    void deleteEmployee(@PathVariable String id) {
        db.deleteTicket(id);
    }
}
