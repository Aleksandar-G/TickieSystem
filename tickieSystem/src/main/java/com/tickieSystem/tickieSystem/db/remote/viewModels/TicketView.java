package com.tickieSystem.tickieSystem.db.remote.viewModels;

import java.sql.Date;

public class TicketView {

    private Integer id;
    private String description;
    private String priority;
    private Date duedate;
    private String difficulty;
    private boolean claimed;

    public TicketView(Integer id, String description, String priority, Date duedate, String difficulty, boolean claimed) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.duedate = duedate;
        this.difficulty = difficulty;
        this.claimed = claimed;
    }

    public TicketView() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Date getDuedate() {
        return duedate;
    }

    public void setDuedate(Date duedate) {
        this.duedate = duedate;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public boolean isClaimed() {
        return claimed;
    }

    public void setClaimed(boolean claimed) {
        this.claimed = claimed;
    }
}
