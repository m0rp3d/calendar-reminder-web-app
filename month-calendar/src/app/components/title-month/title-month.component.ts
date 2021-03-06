import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-month',
  templateUrl: './title-month.component.html',
  styleUrls: ['./title-month.component.css']
})
export class TitleMonthComponent implements OnInit {
  @Input() theMonth = '';
  currentTime = new Date();
  // get the current year in real time
  year: number = this.currentTime.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
