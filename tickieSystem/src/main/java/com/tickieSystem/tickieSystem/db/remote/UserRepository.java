package com.tickieSystem.tickieSystem.db.remote;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;

import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByname(String username);

}

