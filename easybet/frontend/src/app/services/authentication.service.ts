import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username = new BehaviorSubject<string>(""); 
  public loggedin: boolean = false;

  public currentUserName = this.username.asObservable();

  constructor(){ }

  public isLoggedIn(): boolean {
    return this.loggedin;
  }

  public setUser(username: string): void{
    this.username.next(username);
    this.loggedin = true;
  }

}