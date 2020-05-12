import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
