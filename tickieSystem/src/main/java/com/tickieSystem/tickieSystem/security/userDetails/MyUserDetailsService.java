package com.tickieSystem.tickieSystem.security.userDetails;

import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService{

    @Autowired
    UserRepository userRepository;

    @Override
    public JWTUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByname(username);

        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + username));

        return user.map(JWTUserDetails::new).get();
    }
}
