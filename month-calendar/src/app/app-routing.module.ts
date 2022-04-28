import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReminderComponent } from './components/add-reminder/add-reminder.component';
import { AprilComponent } from './components/april/april.component';
import { AugustComponent } from './components/august/august.component';
import { DecemberComponent } from './components/december/december.component';
import { FebruaryComponent } from './components/february/february.component';
import { HomeComponent } from './components/home/home.component';
import { JanuaryComponent } from './components/january/january.component';
import { JulyComponent } from './components/july/july.component';
import { JuneComponent } from './components/june/june.component';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MarchComponent } from './components/march/march.component';
import { MayComponent } from './components/may/may.component';
import { NovemberComponent } from './components/november/november.component';
import { OctoberComponent } from './components/october/october.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReminderAddedSuccessComponent } from './components/reminder-added-success/reminder-added-success.component';
import { ReminderUpdatedSuccessComponent } from './components/reminder-updated-success/reminder-updated-success.component';
import { SeptemberComponent } from './components/september/september.component';
import { UpdateDeleteComponent } from './components/update-delete/update-delete.component';
import { UpdateReminderComponent } from './components/update-reminder/update-reminder.component';
import { GuardRoutesGuard } from './guard-routes.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'january', component: JanuaryComponent, canActivate: [GuardRoutesGuard] },
  { path: 'february', component: FebruaryComponent, canActivate: [GuardRoutesGuard] },
  { path: 'march', component: MarchComponent, canActivate: [GuardRoutesGuard] },
  { path: 'april', component: AprilComponent, canActivate: [GuardRoutesGuard] },
  { path: 'may', component: MayComponent, canActivate: [GuardRoutesGuard] },
  { path: 'june', component: JuneComponent, canActivate: [GuardRoutesGuard] },
  { path: 'july', component: JulyComponent, canActivate: [GuardRoutesGuard] },
  { path: 'august', component: AugustComponent, canActivate: [GuardRoutesGuard] },
  { path: 'september', component: SeptemberComponent, canActivate: [GuardRoutesGuard] },
  { path: 'october', component: OctoberComponent, canActivate: [GuardRoutesGuard] },
  { path: 'november', component: NovemberComponent, canActivate: [GuardRoutesGuard] },
  { path: 'december', component: DecemberComponent, canActivate: [GuardRoutesGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'add', component: AddReminderComponent, canActivate: [GuardRoutesGuard] },
  { path: 'addsuccess', component: ReminderAddedSuccessComponent },
  { path: 'edit', component: UpdateDeleteComponent, canActivate: [GuardRoutesGuard] },
  { path: 'update-reminder/:remNum', component: UpdateReminderComponent, canActivate: [GuardRoutesGuard] },
  { path: 'updatesuccess', component: ReminderUpdatedSuccessComponent },
  { path: 'registersuccess', component: RegistrationSuccessComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [JanuaryComponent,
                                  FebruaryComponent,
                                  MarchComponent,
                                  AprilComponent,
                                  MayComponent,
                                  JuneComponent,
                                  JulyComponent,
                                  AugustComponent,
                                  SeptemberComponent,
                                  OctoberComponent,
                                  NovemberComponent,
                                  DecemberComponent];

