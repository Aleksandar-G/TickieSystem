package com.tickieSystem.tickieSystem;

import com.tickieSystem.tickieSystem.db.remote.UserRepository;
import com.tickieSystem.tickieSystem.db.remote.User_TicketsRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class })

public class TickieSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(TickieSystemApplication.class, args);
	}

}
