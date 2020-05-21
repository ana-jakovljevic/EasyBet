import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username: string = ""; 
  public loggedin: boolean = false;

  constructor() { }

  public isLoggedIn(): boolean {
    return this.loggedin;
  }

  public setUser(username: string): void{
    this.username = username;
    this.loggedin = true;
  }

}
