package com.app.CalendarBackend.CalendarApp.repository;

import com.app.CalendarBackend.CalendarApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, String>{
    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId, String password);
    public User findByUsername(String username);
}
