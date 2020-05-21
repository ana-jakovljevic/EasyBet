import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username: string;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  public isUserLogged(): boolean {
    this.username = this.authService.username;
    return this.authService.isLoggedIn();
  }

}
