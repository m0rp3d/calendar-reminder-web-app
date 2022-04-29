package com.app.CalendarBackend.CalendarApp.controller;

import com.app.CalendarBackend.CalendarApp.entity.Reminder;
import com.app.CalendarBackend.CalendarApp.exception.ResourceNotFoundException;
import com.app.CalendarBackend.CalendarApp.repository.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ReminderController {

    @Autowired
    private ReminderRepository reminderRepository;

    // get all reminders
    @GetMapping("/reminders")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Reminder> getAllReminders() {
        return reminderRepository.findAll();
    }

    // get all the reminders for the select user
    @GetMapping("/reminders/{rem_user}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Reminder> getRemindersByUserName(@PathVariable String rem_user) {
        return reminderRepository.findByRemUser(rem_user);
    }

    // create reminder rest api
    @PostMapping("/reminders")
    @CrossOrigin(origins = "http://localhost:4200")
    public Reminder createReminder(@RequestBody Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    // get reminder by reminder number
    @GetMapping("/reminders/id/{rem_num}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Reminder> getRemindersByRemNum(@PathVariable int rem_num) {
        Reminder reminder = reminderRepository.findById(rem_num)
                .orElseThrow(() -> new ResourceNotFoundException("Reminder not exist with number: " + rem_num));
        return ResponseEntity.ok(reminder);
    }

    @GetMapping("/reminders/day/{rem_month}&{rem_day}&{rem_user}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Reminder getReminderForSingleDay(@PathVariable int rem_month, @PathVariable int rem_day, @PathVariable String rem_user) throws Exception {
        Reminder reminder = reminderRepository.findByRemMonthAndRemDayAndRemUser(rem_month, rem_day, rem_user);
        if(reminder == null) {
            throw new Exception("Reminder on month " + rem_month + " and on day " +  rem_day + " does not exist!");
        }
        return reminder;
    }

    // check if reminder exist with the date and user
    @GetMapping("/reminders/date/{rem_month}&{rem_day}&{rem_user}")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean getReminderByRemMonthAndRemDayAndRemUser(@PathVariable int rem_month, @PathVariable int rem_day, @PathVariable String rem_user) throws Exception {
        Reminder reminder = reminderRepository.findByRemMonthAndRemDayAndRemUser(rem_month, rem_day, rem_user);
        boolean returnable = true;
        if(reminder == null) {
            returnable = false;
        }
        // .orElseThrow(() -> new ResourceNotFoundException("Reminder on month " + rem_month + " and on day " +  rem_day + " does not exist!"));
        //System.out.print(reminder);
        return returnable;
    }

    // update reminder
    @PutMapping("/reminders/id/{rem_num}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Reminder> updateReminder(@PathVariable int rem_num, @RequestBody Reminder reminderDetails) {

        Reminder reminder = reminderRepository.findById(rem_num)
                .orElseThrow(() -> new ResourceNotFoundException("Reminder not exist with number: " + rem_num));

        /*reminder.setRemMonth(reminderDetails.getRemMonth());
        reminder.setRemDay(reminderDetails.getRemDay());*/
        reminder.setDescription(reminderDetails.getDescription());

        Reminder updatedReminder = reminderRepository.save(reminder);

        return ResponseEntity.ok(updatedReminder);

    }

    // delete employee rest api
    @DeleteMapping("/reminders/id/{rem_num}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Map<String, Boolean>> deleteReminder(@PathVariable int rem_num) {
        Reminder reminder = reminderRepository.findById(rem_num)
                .orElseThrow(() -> new ResourceNotFoundException("Reminder not exist with number: " + rem_num));

        reminderRepository.delete(reminder);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);


    }
}
