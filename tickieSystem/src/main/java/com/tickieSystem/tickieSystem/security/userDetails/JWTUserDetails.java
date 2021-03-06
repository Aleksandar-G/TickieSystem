package com.tickieSystem.tickieSystem.security.userDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import com.tickieSystem.tickieSystem.db.remote.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class JWTUserDetails implements UserDetails {

    private static final long serialVersionUID = 5155720064139820502L;

    private Integer id;
    private String username;
    private String password;
    private String role;
    List<SimpleGrantedAuthority> authorities;

    public JWTUserDetails(Integer id, String username, String password, String role) {
        this.id = id;
        this.username = username;
        this.password = password;

        this.authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(role));

        //this.authorities = authorities;
    }

    public JWTUserDetails(User user){
        this.username = user.getName();
        this.password = user.getPassword();
        this.role = user.getLevel();
        this.id = user.getId();
        this.authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(role));
    }

    @JsonIgnore
    public Integer getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority(this.role));
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
