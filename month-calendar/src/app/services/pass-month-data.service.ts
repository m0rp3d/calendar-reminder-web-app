import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassMonthDataService {
  private days = new BehaviorSubject<number>(0);
  public shareD = this.days.asObservable();

  private months = new BehaviorSubject<number>(0);
  public shareM = this.months.asObservable();

  private titleM = new BehaviorSubject<string>('');
  public shareT = this.titleM.asObservable();

  constructor() { }

  updateDays(receiveDays: number, receiveMonths: number, receiveTitle: string) {
    this.days.next(receiveDays);
    this.months.next(receiveMonths);
    this.titleM.next(receiveTitle);
  }
}
