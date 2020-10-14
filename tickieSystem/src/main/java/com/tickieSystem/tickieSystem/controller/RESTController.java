package com.tickieSystem.tickieSystem.controller;

import com.tickieSystem.tickieSystem.db.IDataAccessLayer;
import com.tickieSystem.tickieSystem.factories.DataBaseFactory;
import com.tickieSystem.tickieSystem.models.Ticket;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RESTController {


    private static final IDataAccessLayer db = DataBaseFactory.GetDatabase("mock1");

    @GetMapping(value = "/tickets", produces = "application/json")
    public List<Ticket> Getticket (@RequestParam(value = "id", required = false)String id){
        List<Ticket> result = new ArrayList<>();

        if (id == null)
        {
            result.addAll(db.getAllTickets());
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
