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
import { isNull } from 'util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public message: string = "";
  private subscriptions: Subscription[] = [];
  public maxDate: Date;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {


    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9_]+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      birthDate: ['', [Validators.required,]],
    }, { validator: this.confirmBirthDateValidator });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public confirmBirthDateValidator(group: FormGroup) {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const maxDate = new Date(currentYear - 18, currentMonth, currentDay);
    const enteredDate = new Date(group.get('birthDate').value);
    return enteredDate < maxDate ? null : { notSame: true };
  }


  public submitForm(data): void {
    if (!this.registerForm.valid) {
      console.log("Register from not valid");
      return;
    }
    let sub = this.userService.registerUser(data).subscribe(obj => {
      this.message = obj.message;
      if (!obj.message.length) {
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
