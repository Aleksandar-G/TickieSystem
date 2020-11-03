package com.tickieSystem.tickieSystem.db.remote;

import org.jvnet.hk2.annotations.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;

import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByname(String username);

}

