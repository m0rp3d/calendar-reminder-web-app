import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MonthListComponent } from './components/month-list/month-list.component';
import { SingleDayComponent } from './components/single-day/single-day.component';
import { TitleMonthComponent } from './components/title-month/title-month.component';
import { MarchComponent } from './components/march/march.component';
import { AprilComponent } from './components/april/april.component';
import { MayComponent } from './components/may/may.component';
import { JuneComponent } from './components/june/june.component';
import { JulyComponent } from './components/july/july.component';
import { AugustComponent } from './components/august/august.component';
import { SeptemberComponent } from './components/september/september.component';
import { OctoberComponent } from './components/october/october.component';
import { NovemberComponent } from './components/november/november.component';
import { DecemberComponent } from './components/december/december.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';
import { ReminderAddedSuccessComponent } from './components/reminder-added-success/reminder-added-success.component';
import { UpdateDeleteComponent } from './components/update-delete/update-delete.component';
import { UpdateReminderComponent } from './components/update-reminder/update-reminder.component';
import { ReminderUpdatedSuccessComponent } from './components/reminder-updated-success/reminder-updated-success.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthListComponent,
    routingComponents,
    SingleDayComponent,
    TitleMonthComponent,
    MarchComponent,
    AprilComponent,
    MayComponent,
    JuneComponent,
    JulyComponent,
    AugustComponent,
    SeptemberComponent,
    OctoberComponent,
    NovemberComponent,
    DecemberComponent,
    LoginComponent,
    LoginsuccessComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent,
    AddReminderComponent,
    ReminderAddedSuccessComponent,
    UpdateDeleteComponent,
    UpdateReminderComponent,
    ReminderUpdatedSuccessComponent,
    RegistrationSuccessComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
