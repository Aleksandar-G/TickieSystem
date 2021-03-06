package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.ClosedTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ClosedTicketsRepository extends JpaRepository<ClosedTicket, Integer> {

    List<ClosedTicket> findAllByUserid(Integer userId);
}
