import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-gb';
import {
  trigger, state, style, animate, transition, // ...
} from '@angular/animations';
@Component({
  selector: 'app-calendarui',
  templateUrl: './calendarui.component.html',
  styleUrls: ['./calendarui.component.scss']
})
export class CalendaruiComponent implements OnInit {
@HostListener("mousedown",['$event']) onMouseOver(event:any){}
@HostListener('mouseup',['$event']) onMouseOut(event:any) {

}
  sidnav: boolean= false;
  weekCurrent:any={
    now :null,
    today :null,
    from_date: null,
    to_date: null,
    days:[],
    hours:[],
    minutesHour:[]

  }
  weekArray: any[]=[];

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
  this.weekCurrent.today = moment();
  this.weekCurrent.now = moment();
    console.log(this.weekCurrent.now)
  this.weekCurrent.from_date = this.weekCurrent.now.clone().startOf('week');
  this.weekCurrent.to_date = this.weekCurrent.now.clone().endOf('week');

    for (let i = 0; i <= 6; i++) {
      console.log({active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.now), curr: moment(this.weekCurrent.from_date).add(i, 'days'), now: this.weekCurrent.now});
      this.weekCurrent.days.push({id:i,date:moment(this.weekCurrent.from_date).add(i, 'days'), active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.today,"day")});
    }
    console.log(this.weekCurrent);
    for (let i = 0; i <24; i++) {
      this.weekCurrent.hours.push(moment().startOf('day').add(i,'hours'));
    }
    for (let i = 0; i <60; i++) {
      this.weekCurrent.minutesHour.push(i);
    }
  }
  onMinute(min,hour ,date){
    console.log('hour', hour);
    // console.log('date', date.add(min,'minutes'));
      console.log('up', moment(date.date).add(hour,'hours').add(min,'minutes').format("hh:mm") );

  }
  onMinuteUp(min,hour,date){
    // console.log('min', min);
    // console.log('date', date.add(min,'minutes'));
    console.log('up', moment(date.date).format("hh") );
     console.log('up', moment(date.date).add(hour,'hours').add(min,'minutes').format("hh:mm") );

  }
  moveTimeline(line){
    if(line=='right'){
      this.weekCurrent.now=this.weekCurrent.now.add(1,'weeks');
      this.weekCurrent.from_date = this.weekCurrent.now.clone().startOf('week');
      this.weekCurrent.to_date = this.weekCurrent.now.clone().endOf('week');
      console.log('active',this.weekCurrent.now.format('dd.MM.YY'));
      this.weekCurrent.days=[];
      for (let i = 0; i <= 6; i++) {

        this.weekCurrent.days.push({date:moment(this.weekCurrent.from_date).add(i, 'days'), active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.today,"day")});
      }
    }
  }
  toggleSidnav(){
    this.sidnav=!this.sidnav;
  }

}
