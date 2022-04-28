import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reminder } from '../../common/reminder';
import { AddReminderService } from '../../services/add-reminder.service';
import { PassUsernameService } from '../../services/pass-username.service';
import { RetrieveReminderService } from '../../services/retrieve-reminder.service';
import { dayIsCorrect } from '../../shared/day.validator';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {
  reminder: Reminder = new Reminder();
  reminderExist: String = "";
  reminderUN = '';
  matchFound!: boolean;

  get month() {
    return this.addReminderForm.get('month');
  }

  get day() {
    return this.addReminderForm.get('day');
  }

  get description() {
    return this.addReminderForm.get('description');
  }

  constructor(private _unRemService: PassUsernameService, private reminderService: AddReminderService, private router: Router, private checkReminder: RetrieveReminderService, private fb: FormBuilder) { }

  addReminderForm = this.fb.group({
    month: ['', Validators.required],
    day: ['', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(90)]]

  }, { validators: dayIsCorrect });

  ngOnInit(): void {
    this._unRemService.shareUN.subscribe(u => this.reminderUN = u);
    this.reminder.remUser = this.reminderUN;
    this.reminderExist = "";
  }

  saveReminder() {
    // checks if a reminder exist in the selected date by the logged in user
    this.checkReminder.getReminderByDate(this.reminder.remMonth, this.reminder.remDay, this.reminder.remUser).subscribe(data => {
      this.matchFound = data;

      console.log("match was found: " + this.matchFound);

      // if a reminder doesn't exist in the selected date by the logged in user,
      // will add the reminder to the database
      if (this.matchFound == false) {
        this.reminderExist = "";
        this.reminderService.addReminder(this.reminder).subscribe(data => {
          console.log(data);
          this.goToAddReminderSuccess();
        },
          error => console.log(error));
      }
      else {
        // message will display if a reminder exist in the selected date from the logged in user
        this.reminderExist = "A Reminder using this date already Exist! Please use another date."
      }

    })

  }

  goToAddReminderSuccess() {
    // navigate to the addsuccess component which notifies the user that adding the reminder was successful
    this.router.navigate(['/addsuccess']);
  }

  onSubmit(submitBtn: HTMLButtonElement) {
    // submitBtn disables submit button after it is pressed to prevent double submissions
    submitBtn.disabled = true;
    this.saveReminder();
    submitBtn.disabled = false;
    
  }

}
