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
    this.authService.currentUserName.subscribe(username => {
      this.username = username;
    });
  }

  ngOnInit(): void {
  }

  public isUserLogged(): boolean {
    return this.authService.isLoggedIn();
  }

  public logOut(): void{
    this.authService.setUser("");
  }

}
