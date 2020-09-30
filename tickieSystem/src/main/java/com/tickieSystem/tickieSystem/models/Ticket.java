package com.tickieSystem.tickieSystem.models;


import java.util.Date;

public class Ticket {

    public String ID;
    public String description;
    public Date DueDate;
    public String PriorityLevel;
    public String DifficultyLevel;


    public String getID() {
        return ID;
    }

    public String getDescription() {
        return description;
    }

    public String getPriorityLevel() {
        return PriorityLevel;
    }

    public String getDifficultyLevel() {
        return DifficultyLevel;
    }

    public Ticket(){

    }

    public Ticket(String p_ID, String p_description,Date p_DueDate, String p_priorityLevel, String p_DifficultyLevel){

        this.description = p_description;
        this.DueDate = p_DueDate;
        this.ID = p_ID;
        this.DifficultyLevel = p_DifficultyLevel;
        this.PriorityLevel = p_priorityLevel;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ID='" + ID + '\'' +
                ", description='" + description + '\'' +
                ", PriorityLevel='" + PriorityLevel + '\'' +
                ", DifficultyLevel='" + DifficultyLevel + '\'' +
                '}';
    }


}


