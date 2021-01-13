package com.tickieSystem.tickieSystem.db.remote.viewModels;

public class UserView {

    private Integer id;

    private String name;

    private String password;

    private String level;

    public UserView() {
    }

    public UserView(String name, String password, String level) {
        this.name = name;
        this.password = password;
        this.level = level;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
