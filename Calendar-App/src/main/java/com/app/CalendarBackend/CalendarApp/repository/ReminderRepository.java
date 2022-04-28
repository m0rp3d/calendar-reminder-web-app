package com.app.CalendarBackend.CalendarApp.repository;

import com.app.CalendarBackend.CalendarApp.entity.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Integer> {
    Reminder findByRemMonthAndRemDayAndRemUser(@RequestParam("num_month") Integer num_month, @RequestParam("rem_day") Integer rem_day, @RequestParam("rem_user") String rem_user);
    List<Reminder> findByRemUser( String rem_user);
}
