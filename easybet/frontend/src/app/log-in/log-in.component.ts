import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  public logInForm: FormGroup;
  public message: string = "";
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.logInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9_]+')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  

  ngOnInit(): void {
  }

  public submitForm(data): void {
    let sub = this.userService.logInUser(data).subscribe(obj => {
      this.message = obj.message;
      if (!this.message.length) {
        this.logInForm.reset();
        this.authenticationService.setUser(obj.username);
        this.subscriptions.push(sub);
        this.router.navigate(['/']);
      }
    });
    // this.subscriptions.push(sub);
    // this.router.navigate(['/']);
  }

  public isFormValid() {
    return this.logInForm.valid;
  }
}
