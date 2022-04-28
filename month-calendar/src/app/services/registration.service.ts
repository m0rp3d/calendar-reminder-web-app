import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public getUsernameFromRemote(user: string): Observable<boolean> {
    return this._http.get<boolean>(`http://localhost:8080/retrieve/${user}`);
  }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/login", user);
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/registeruser", user);
  }
}
