package com.tickieSystem.tickieSystem.db.remote;

import com.tickieSystem.tickieSystem.db.remote.models.User_tickets;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface User_TicketsRepository extends JpaRepository<User_tickets,Integer> {

    List<User_tickets> findAllByUserid(Integer userid);
    @Transactional
    void deleteByUseridAndTicketid(Integer userid , Integer ticketId);

}
