import { Component } from '@angular/core';
import { PassUsernameService } from './services/pass-username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'month-calendar';
  mainUsername = '';

  constructor(private _unService: PassUsernameService) { }

  // assign username from login method to mainUsername string
  ngOnInit() {
    this._unService.shareUN.subscribe(u => this.mainUsername = u);
    console.log("username is now " + this.mainUsername);
  }

  // assign value for the username to empty
  logOut(emptyUsername: string) {
    this._unService.updateUsername(emptyUsername);
  }
}
