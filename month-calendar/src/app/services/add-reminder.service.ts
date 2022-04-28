import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../common/reminder';

@Injectable({
  providedIn: 'root'
})
export class AddReminderService {

  private baseUrl = "http://localhost:8080/reminders";

  constructor(private httpClient: HttpClient) { }

  addReminder(reminder: Reminder): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, reminder);

  }
}
