package com.tickieSystem.tickieSystem.db.remote.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name ="tickets")
public class Ticket {

    @Id
    @GeneratedValue()

    private Integer id;
    @Column(name = "ticketdescription")
    private String description;
    private String priority;
    private Date duedate;
    private String difficulty;

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
}
