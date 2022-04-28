package com.app.CalendarBackend.CalendarApp.controller;

import com.app.CalendarBackend.CalendarApp.entity.Reminder;
import com.app.CalendarBackend.CalendarApp.entity.User;
import com.app.CalendarBackend.CalendarApp.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    // check if existing user is there
    @GetMapping("/retrieve/{username}")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean checkUserExists(@PathVariable String username) {
        User userObj = service.fetchExistingUser(username);
        boolean returnable = true;
        if(userObj == null) {
            returnable = false;
        }
        return returnable;
    }

    // method to register user
    @PostMapping("/registeruser")
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception{
        String tempEmailId = user.getEmailId();
        if(tempEmailId != null && !"".equals(tempEmailId)) {
            User userobj = service.fetchUserByEmailId(tempEmailId);
            if(userobj != null) {
                throw new Exception("user with " + tempEmailId + " is already exist!");
            }
        }
        User userObj = null;
        userObj = service.saveUser(user);

        return userObj;
    }

    // checks if the login credentials exist in the database
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPass = user.getPassword();
        User userObj = null;
        if(tempEmailId != null && tempPass != null) {
            userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if(userObj == null) {
            throw new Exception("bad credentials");
        }
        return userObj;
    }

}
