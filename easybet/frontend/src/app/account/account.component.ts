import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getCurrencySymbol } from '@angular/common';
import { User } from '../models/user/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public ChangePasswordForm: FormGroup;
  public message: string = "";
  public username = "";
  private ok = false;
  public email: string = "";
  public id: string = "";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.ChangePasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.authService.currentUserName.subscribe(username => {
      this.username = username;
    });

    this.userService.getUserInfo(this.username).subscribe(obj => {
      this.email = obj.email;
      this.id = obj._id;
    });
  }

  ngOnInit(): void {
    this.ChangePasswordForm.get('username').setValue(this.username);
  }

  public submitChangePassword(data): void {
    console.log(data[0]);
    let sub = this.userService.changePassword(data).subscribe(obj => {
      this.message = obj.message;
      this.ok = obj.ok;
      //this.ChangePasswordForm.reset();
    });
  }

  public colorMessage() {
    return { 'alert-success': this.ok, 'alert-warning': !this.ok };
  }
}
