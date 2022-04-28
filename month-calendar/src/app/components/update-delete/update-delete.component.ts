import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reminder } from '../../common/reminder';
import { PassUsernameService } from '../../services/pass-username.service';
import { RetrieveReminderService } from '../../services/retrieve-reminder.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  reminders!: Reminder[];
  tempUserName = '';

  constructor(private _bringUserName: PassUsernameService, private retrieveReminderService: RetrieveReminderService, private router: Router) { }

  ngOnInit(): void {
    // subscribes the data for the logged in username
    // into the tempUserName string
    this._bringUserName.shareUN.subscribe(u => this.tempUserName = u);
    // calls getReminders method for this username
    this.getReminders(this.tempUserName);
  }

  private getReminders(tempUN: string) {
    // service to get a list of reminders for the logged in user
    // passing the username of the logged in user as a parameter
    this.retrieveReminderService.getUserReminderList(tempUN).subscribe(data => {
      this.reminders = data;
    });
  }

  // method to navigate to the update reminder page
  // passing the id number of the reminder
  updateReminder(remNum: number) {
    this.router.navigate(['update-reminder', remNum]);
  }

  // method to call service to delete reminder
  deleteReminder(remNum: number) {
    this.retrieveReminderService.deleteReminder(remNum).subscribe(data => {
      console.log
      this.getReminders(this.tempUserName);
    })
    
  }

}
