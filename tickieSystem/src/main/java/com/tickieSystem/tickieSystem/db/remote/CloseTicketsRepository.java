package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.CloseTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Table;


public interface CloseTicketsRepository extends JpaRepository<CloseTicket,Integer> {
}
