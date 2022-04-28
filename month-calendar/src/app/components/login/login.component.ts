import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
//import * as EventEmitter from 'events';
import { User } from '../../common/user';
import { PassUsernameService } from '../../services/pass-username.service';
import { RegistrationService } from '../../services/registration.service';
import { passwordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  constructor(private _service: RegistrationService, private _router: Router, private _unService: PassUsernameService, private formB: FormBuilder) { }

  loginForm = this.formB.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30), Validators.minLength(12)]],
    password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
  }, { validator: passwordValidator });

  ngOnInit(): void {
  }

  loginUser() {
    // passes form data into user object to make a post request for login
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        // service stores username so it can be accessed by other parts of the app
        // if login successful
        this._unService.updateUsername(data.username);
        //console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        //console.log("exception occurred");
        this.msg = "Please enter valid email and password";
      }
      )
  }
}
