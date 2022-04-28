package com.app.CalendarBackend.CalendarApp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="user")
public class User {

    @Id
    @Column(name="username")
    private String username;

    @Column(name="email_id")
    private String emailId;

    @Column(name="password")
    private String password;

    // ur_acc stands for user reminder access
    //@OneToMany(cascade = CascadeType.ALL)
    //@JoinColumn(name="ur_acc", referencedColumnName = "username")
    //List<Reminder> reminder = new ArrayList<>();

    //@OneToMany(mappedBy="theUser", cascade = CascadeType.ALL)
    //private List<Reminder> reminders;

    public User() {

    }

    public User(String emailId, String password, String username) {
        this.emailId = emailId;
        this.password = password;
        this.username = username;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
