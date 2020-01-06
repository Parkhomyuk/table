import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendaruiComponent } from './calendarui/calendarui.component';
import { GoogleComponent } from './google/google.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTableModule} from '@angular/material';
import { SelecteCellDirective } from './directives/selecte-cell.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalendaruiComponent,
    GoogleComponent,
    SelecteCellDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
