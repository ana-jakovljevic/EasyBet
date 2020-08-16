import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username = new BehaviorSubject<string>("");

  //public currentUserName = this.username.asObservable();
  public currentUserName = localStorage.getItem("username");

  constructor() { }

  public isLoggedIn(): boolean {
    return localStorage.length !== 0;
    //return (this.username.getValue().length > 0);
  }

  public setUser(username: string): void {
    localStorage.setItem("username", username);
    //this.username.next(username);
  }

}