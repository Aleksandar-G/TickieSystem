package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface User_TicketsRepository extends JpaRepository<User_tickets,Integer> {
}
