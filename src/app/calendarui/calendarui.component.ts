import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-gb';

@Component({
  selector: 'app-calendarui',
  templateUrl: './calendarui.component.html',
  styleUrls: ['./calendarui.component.scss']
})
export class CalendaruiComponent implements OnInit {
  weekCurrent:any={
    now :null,
    from_date: null,
    to_date: null,
    days:[],
    hours:[]

  }
  weekArray: any[]=[];

  constructor() {

  }

  ngOnInit() {
  this.weekCurrent.now = moment();
    console.log(this.weekCurrent.now)
  this.weekCurrent.from_date = moment().clone().startOf('week');
  this.weekCurrent.to_date = moment().clone().endOf('week');

    for (let i = 0; i <= 6; i++) {
      console.log({active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.now), curr: moment(this.weekCurrent.from_date).add(i, 'days'), now: this.weekCurrent.now});
      this.weekCurrent.days.push({date:moment(this.weekCurrent.from_date).add(i, 'days'), active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.now,"day")});
    }
    console.log(this.weekCurrent);
    for (let i = 0; i <24; i++) {
      this.weekCurrent.hours.push(moment().startOf('day').add(i,'hours'));
    }
  }

}
