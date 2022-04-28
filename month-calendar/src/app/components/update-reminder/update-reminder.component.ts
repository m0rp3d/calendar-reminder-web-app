import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reminder } from '../../common/reminder';
import { AddReminderService } from '../../services/add-reminder.service';
import { PassUsernameService } from '../../services/pass-username.service';
import { RetrieveReminderService } from '../../services/retrieve-reminder.service';
import { dayIsCorrect } from '../../shared/day.validator';

@Component({
  selector: 'app-update-reminder',
  templateUrl: './update-reminder.component.html',
  styleUrls: ['./update-reminder.component.css']
})
export class UpdateReminderComponent implements OnInit {

  reminder: Reminder = new Reminder();
  tempRemNum!: number;

  reminderUN = '';

  get description() {
    return this.updateReminderForm.get('description');
  }

  constructor(private _unRemService: PassUsernameService,
              private reminderService: AddReminderService,
              private router: Router,
              private retrieveReminder: RetrieveReminderService,
              private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  updateReminderForm = this.fb.group({
    description: ['', [Validators.required, Validators.maxLength(90)]]

  }, { validators: dayIsCorrect });

  ngOnInit(): void {
    this.tempRemNum = this.activatedRoute.snapshot.params['remNum'];
    // get reminder by id and subscribe data into reminder object
    this.retrieveReminder.getReminderByRemNum(this.tempRemNum).subscribe(data => {
      this.reminder = data;
    }, error => console.log(error));
  }

  onSubmit() {
    // calls service to update the selected reminder afte clicking submit
    this.retrieveReminder.updateReminder(this.tempRemNum, this.reminder).subscribe(data => {
      // calls method to naviage to reminder update success component
      this.goToUpdatedReminderSuccess();
    }
    , error => console.log(error));
  }

  // method to navigate to reminder update success component
  goToUpdatedReminderSuccess() {
    this.router.navigate(['/updatesuccess']);
  }
}
