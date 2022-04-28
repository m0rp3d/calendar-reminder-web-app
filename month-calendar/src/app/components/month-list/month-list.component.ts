import { Component, OnInit } from '@angular/core';
import { PassMonthDataService } from '../../services/pass-month-data.service';

@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
 
  constructor(private monthData: PassMonthDataService) { }

  ngOnInit(): void {
  }

  passOnDays(fromDays: number, fromMonth: number, fromTitle: string) {
    // click method that calls PassMonthDataService to pass data from the clicked month
    // for any of the month components to use
    this.monthData.updateDays(fromDays, fromMonth, fromTitle);
  }

}
