import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  Validators,
  ValidationErrors
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],  
    });
  }

  ngOnInit(): void {
  }

  public submitForm(data): void{
    console.log(data);

    this.registerForm.reset();
  }

  /*
  public get name() {
    return this.registerForm.get('name');
  }
  public get address() {
    return this.registerForm.get('lastName');
  }
  public get email() {
    return this.registerForm.get('email');
  }
  */

}
