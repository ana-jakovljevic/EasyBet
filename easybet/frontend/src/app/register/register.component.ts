import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public message: string = "";
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9_]+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public submitForm(data): void {
    if (!this.registerForm.valid) {
      console.log("Register from not valid");
      return;
    }
    let sub = this.userService.registerUser(data).subscribe(message => {
      this.message = message.message;
      if (!message.message.length) {
        window.alert("Registration successfully completed");
        this.registerForm.reset();
        this.router.navigate(['/logIn']);

      }
    });

    this.subscriptions.push(sub);
  }

  public isFormValid() {
    return this.registerForm.valid;
  }
}
