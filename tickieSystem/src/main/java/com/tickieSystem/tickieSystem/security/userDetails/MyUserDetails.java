package com.tickieSystem.tickieSystem.security.userDetails;

import com.tickieSystem.tickieSystem.db.remote.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;

public class MyUserDetails implements UserDetails {

    private Integer id;
    private String username;
    private String password;
    private String role;

    public MyUserDetails(User user){
        this.username = user.getName();
        this.password = user.getPassword();
        this.role = user.getLevel();
        this.id = user.getId();
    }

    public MyUserDetails(){

    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority(this.role));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
