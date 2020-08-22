import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    /*this.authService.currentUserName.subscribe(username => {
      this.username = username;
    });*/

    //this.username = localStorage.getItem("username");

  }

  ngOnInit(): void {
    this.username = this.authService.currentUserName;
  }

  public isUserLogged(): boolean {
    return this.authService.isLoggedIn();
  }

  public logOut(): void{
    localStorage.clear();
    this.router.navigateByUrl("/", {skipLocationChange: false}).then(() => {
      location.reload();
    });
    //this.authService.setUser("");
  }

}
