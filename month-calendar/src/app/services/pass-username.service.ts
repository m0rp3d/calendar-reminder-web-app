import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PassUsernameService {
  private usName = new BehaviorSubject<string>('');
  public shareUN = this.usName.asObservable();

  constructor() { }

  updateUsername(receiveUN: string) {
    this.usName.next(receiveUN);
  }

}
