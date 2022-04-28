import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../../common/reminder';
import { PassMonthDataService } from '../../services/pass-month-data.service';
import { PassUsernameService } from '../../services/pass-username.service';

@Component({
  selector: 'app-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayComponent implements OnInit {
  @Input() indexDay = 0;
  numForMonth = 0;
  currentUsername = "";
  reminder = new Reminder();

  private baseUrl = 'http://localhost:8080/reminders';


  constructor(private getDateForDay: PassMonthDataService, private currentUN: PassUsernameService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // gets the month data from the clicked month list element
    // to be passed into this typscript file to be used as a parameter
    // to obtain the appropriate reminder
    this.getDateForDay.shareM.subscribe(y => this.numForMonth = y);
    // gets username that was entered in login
    // to be used as a parameter for getting the appropriate reminder
    // for the logged in user
    this.currentUN.shareUN.subscribe(u => this.currentUsername = u);
  }

  getReminderForDay(theNumMonth: number, theIndexDay: number, theUserName: string): Observable<Reminder> {
    // method for a get request for the reminder that should display on this component
    // based on the date parameters (day, month) and username
    let theIndexPlusOne = theIndexDay + 1;
    let newUrl = `${this.baseUrl}/day/${theNumMonth}&${theIndexPlusOne}&${theUserName}`;
    console.log(newUrl);

    return this.httpClient.get<Reminder>(`${this.baseUrl}/day/${theNumMonth}&${theIndexPlusOne}&${theUserName}`);
  }

  ngOnChanges() {
    // calls aformentioned services on changes
    this.getDateForDay.shareM.subscribe(y => this.numForMonth = y);
    this.currentUN.shareUN.subscribe(u => this.currentUsername = u);
    // calls getReminderForDay method to get response from backend for reminder
    // so that the reminder data can be displayed on single-day component
    this.getReminderForDay(this.numForMonth, this.indexDay, this.currentUsername).subscribe(
      data => {
        this.reminder = data;
        //console.log(this.reminder.description);
      }
    )
  }

}
