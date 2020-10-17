package com.tickieSystem.tickieSystem.db.remote;

import org.jvnet.hk2.annotations.Service;
import org.springframework.data.repository.CrudRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends CrudRepository<User, Integer> {

}

