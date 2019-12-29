import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaruiComponent } from './calendarui.component';

describe('CalendaruiComponent', () => {
  let component: CalendaruiComponent;
  let fixture: ComponentFixture<CalendaruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendaruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendaruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
