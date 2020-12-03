package com.tickieSystem.tickieSystem;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class })
@EnableJpaRepositories
public class TickieSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(TickieSystemApplication.class, args);
	}

}
