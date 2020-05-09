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
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  public logInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.logInForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],  
    });
  }

  ngOnInit(): void {
  }

  public submitForm(data): void{
    console.log(data);

    this.logInForm.reset();
  }
}
