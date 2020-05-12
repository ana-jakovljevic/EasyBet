import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLoggedIn() {
    //here is call to the server to check if user is logged in
    return true;
  }
}
