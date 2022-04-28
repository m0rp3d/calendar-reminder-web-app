package com.app.CalendarBackend.CalendarApp.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name="reminder")
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="rem_num")
    private int remNum;

    @Column(name="rem_month")
    private int remMonth;

    @Column(name="rem_day")
    private int remDay;

    @Column(name="description")
    private String description;

    @Column(name="rem_user")
    private String remUser;

    //@ManyToOne
    //@JoinColumn(name="username")
    //private User theUser;

    public Reminder() {

    }

    public Reminder(int remMonth, int remDay, String description, String remUser) {
        this.remMonth = remMonth;
        this.remDay = remDay;
        this.description = description;
        this.remUser = remUser;
    }

    public int getRemNum() { return remNum; }

    public int getRemMonth() {
        return remMonth;
    }

    public void setRemMonth(int remMonth) {
        this.remMonth = remMonth;
    }

    public int getRemDay() {
        return remDay;
    }

    public void setRemDay(int remDay) {
        this.remDay = remDay;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRemUser() {
        return remUser;
    }

    public void setRemUser(String remUser) {
        this.remUser = remUser;
    }
}
