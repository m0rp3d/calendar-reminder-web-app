import { Component, OnInit } from '@angular/core';
import { PassMonthDataService } from '../../services/pass-month-data.service';

@Component({
  selector: 'app-june',
  templateUrl: './june.component.html',
  styleUrls: ['./june.component.css']
})
export class JuneComponent implements OnInit {
  theseDays = 0;
  theseMonths = 0;
  theseTitles = '';
  dayArr: number[] = Array();

  constructor(private days: PassMonthDataService) { }

  ngOnInit() {
    // subscribe data from the clicked month list element
    // onto typescript code to use in this component
    this.days.shareD.subscribe(x => this.theseDays = x);
    this.days.shareM.subscribe(y => this.theseMonths = y);
    this.days.shareT.subscribe(z => this.theseTitles = z);
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
