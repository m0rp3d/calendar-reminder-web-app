import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../common/user';
import { RegistrationService } from '../../services/registration.service';
import { RetrieveReminderService } from '../../services/retrieve-reminder.service';
import { nameValidator } from '../../shared/check-special-chars';
import { passwordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';
  userNameExist!: boolean;

  get email() {
    return this.registrationForm.get('email');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get cpassword() {
    return this.registrationForm.get('cpassword');
  }

  constructor(private _service: RegistrationService, private _router: Router, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30), Validators.minLength(12)]],
    username: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(6), nameValidator]],
    password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]],
    cpassword: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
  }, { validator: passwordValidator });

  ngOnInit(): void {
    this.msg = '';
  }

  registerUser(submitBtn: HTMLButtonElement) {

    // prevents double submitting
    submitBtn.disabled = true;

    // checks if username exists
    console.log("this username is " + this.user.username);
    this._service.getUsernameFromRemote(this.user.username).subscribe(
      data => {
        this.userNameExist = data;
        console.log("number test 1: " + this.userNameExist);

        if (this.userNameExist == true) {
          this.msg = "Username already exists";
          
        }
        else { // register username if it doesn't exist
          this._service.registerUserFromRemote(this.user).subscribe(
            data => {
              console.log("response recieved");
              this.msg = "Registration successful";
              this._router.navigate(['/registersuccess'])
            },
            error => {
              console.log("exception occured");
              this.msg = "Account already exists";
            }
          )
        }
        submitBtn.disabled = false;
      }
    )

    
    
    
  }

}
