package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, Integer> {
}
