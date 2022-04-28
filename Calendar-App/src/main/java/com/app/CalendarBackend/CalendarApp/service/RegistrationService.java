package com.app.CalendarBackend.CalendarApp.service;

import com.app.CalendarBackend.CalendarApp.entity.User;
import com.app.CalendarBackend.CalendarApp.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repo;

    public User saveUser(User user) {

        return repo.save(user);
    }

    public User fetchExistingUser(String username) {
        return repo.findByUsername(username);
    }

    public User fetchUserByEmailId(String email) {
       return repo.findByEmailId(email);
    }

    public User fetchUserByEmailIdAndPassword(String email, String password) {
        return repo.findByEmailIdAndPassword(email, password);
    }
}
