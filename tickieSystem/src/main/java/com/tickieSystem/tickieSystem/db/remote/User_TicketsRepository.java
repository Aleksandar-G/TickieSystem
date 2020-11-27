package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface User_TicketsRepository extends JpaRepository<User_tickets,Integer> {

    List<User_tickets> findAllByUserid(Integer userid);

}
