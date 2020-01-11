import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  trigger, state, style, animate, transition, // ...
} from '@angular/animations';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transition: '0.5s' }),
          animate('500ms', style({transition: '0.5s'}))
        ]),
        transition(':leave', [
          style({transition: '0.5s' }),
          animate('500ms', style({transition: '0.5s'}))
        ])
      ]
    )
  ],
})
export class GoogleComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  sidnav: boolean= false;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  headerDate: any=[];
  weekCurrent:any={
    now :null,
    today :null,
    from_date: null,
    to_date: null,
    days:[],
    hours:[],
    minutesHour:[]

  }
  constructor() { }

  ngOnInit() {
    this.weekCurrent.today=moment();
    this.weekCurrent.now = moment();
    this.weekCurrent.from_date = this.weekCurrent.now.clone().startOf('week');
    this.weekCurrent.to_date = this.weekCurrent.now.clone().endOf('week');
    for (let i = 0; i <= 6; i++) {

      this.weekCurrent.days.push({id:i,date:moment(this.weekCurrent.from_date).add(i, 'days'), active: moment(this.weekCurrent.from_date).add(i, 'days').isSame(this.weekCurrent.today,"day")});
    }
    console.log('days', this.weekCurrent.days);
    for (let i = 0; i <24; i++) {
      this.weekCurrent.hours.push(i);
    }
    for (let i = 0; i <60; i++) {
      this.weekCurrent.minutesHour.push(i);
    }
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
