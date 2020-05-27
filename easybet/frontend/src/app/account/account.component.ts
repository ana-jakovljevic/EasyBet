import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { getCurrencySymbol } from '@angular/common';
import { User } from '../models/user/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.ChangePasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.confirmPasswordValidator });
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
  public confirmPasswordValidator(group: FormGroup) {
    let pass = group.get('newPassword').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  public submitChangePassword(data): void {
    if (this.ChangePasswordForm.valid) {
      let sub = this.userService.changePassword(data).subscribe(obj => {
        this.message = obj.message;
        this.ok = obj.ok;
        if (this.ok) {
          this.logOut();
          window.alert("Password changed");
          this.router.navigate(['/logIn']);
        }
        //this.ChangePasswordForm.reset();
      });
    } else {
      this.message = "New password is incorrect";
    }
  }

  public colorMessage() {
    return { 'alert-success': this.ok, 'alert-warning': !this.ok };
  }
  public logOut(): void {
    this.authService.setUser("");
  }

}
