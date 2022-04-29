import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLeapYearService {

  constructor() { }

  isLeapYear(year: number): boolean {

    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }
}
