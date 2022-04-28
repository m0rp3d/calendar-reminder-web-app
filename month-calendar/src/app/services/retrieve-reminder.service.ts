import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../common/reminder';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class RetrieveReminderService {

  private baseUrl = "http://localhost:8080/reminders";
  private extendedUrl = "";
  booger!: boolean;

  constructor(private httpClient: HttpClient) { }


  // get request method
  // gets list of all reminders for the logged in user
  getUserReminderList(tempUN: string): Observable<Reminder[]> {
    this.extendedUrl = this.baseUrl + "/" + tempUN;
    return this.httpClient.get<Reminder[]>(`${this.extendedUrl}`);
  }

  // get request method
  // get reminder by id
  getReminderByRemNum(remNum: number): Observable<Reminder> {
    return this.httpClient.get<Reminder>(`${this.baseUrl}/id/${remNum}`);
  }

  // get request that returns boolean
  // boolean true if exist on date and with user
  // boolean false otherwise
  getReminderByDate(remMonth: number, remDay: number, remUser: string): Observable<boolean> {
    this.booger = false;
    return this.httpClient.get<boolean>(`${this.baseUrl}/date/${remMonth}&${remDay}&${remUser}`);
  }

  // put request for updating the selected reminder in the database
  updateReminder(remNum: number, reminder: Reminder): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/id/${remNum}`, reminder);
  }

  // delete request to delete the selected reminder from database
  deleteReminder(remNum: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/id/${remNum}`);
  }


  



}
