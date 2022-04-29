import { Component, OnInit } from '@angular/core';
import { IsLeapYearService } from '../../services/is-leap-year.service';
import { PassMonthDataService } from '../../services/pass-month-data.service';

@Component({
  selector: 'app-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.css']
})
export class FebruaryComponent implements OnInit {

  theseDays = 0;
  theseMonths = 0;
  theseTitles = '';
  dayArr: number[] = Array();
  currentTime = new Date();
  // get the current year in real time
  year = this.currentTime.getFullYear();

  checkLeapYear : boolean = false;

  constructor(private days: PassMonthDataService, private checkLeap: IsLeapYearService) { }

  ngOnInit() {
    // subscribe data from the clicked month list element
    // onto typescript code to use in this component
    this.days.shareD.subscribe(x => this.theseDays = x);
    this.days.shareM.subscribe(y => this.theseMonths = y);
    this.days.shareT.subscribe(z => this.theseTitles = z);

    // calls is-leap-year service to check if current year is a leap year
    this.checkLeapYear = this.checkLeap.isLeapYear(this.year);

    // if the current year is a leap year, will increment number of days
    // in february plus one
    if (this.checkLeapYear === true) {
      this.theseDays++;
    }
    //console.log("checkLeapYear is " + this.checkLeapYear);
    console.log(this.theseDays);
    console.log(this.theseMonths);
    console.log(this.theseTitles);
    this.dayArr = [];
    // fills array to length of number of days in clicked month
    this.fillDayArray(this.theseDays);
  }


  fillDayArray(insertDays: number) {
    // fills array with increment numbers to display on calendar
    for (let x = 1; x <= insertDays; x++) {
      this.dayArr.push(x);
    }
  }

}
