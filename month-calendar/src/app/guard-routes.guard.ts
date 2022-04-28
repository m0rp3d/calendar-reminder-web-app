import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PassUsernameService } from './services/pass-username.service';

@Injectable({
  providedIn: 'root'
})
export class GuardRoutesGuard implements CanActivate {
  
  

  constructor(private unService: PassUsernameService, private router: Router) { }

  ngOnInit() {
    //this.unService.shareUN.subscribe(u => this.checkUN = u);
    //console.log("on init un is " + this.checkUN);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let returnable: boolean = false;

    let checkUN: string = "";
    // checks if username service has a username stored
    // if so assigns username to checkUN
    this.unService.shareUN.subscribe(u => checkUN = u);

    console.log("value for username is " + checkUN);

    if (checkUN == "") {
      returnable = false;
      return returnable;
    }
    else {
      returnable = true;   
      return returnable;
    }
  }
  
}
