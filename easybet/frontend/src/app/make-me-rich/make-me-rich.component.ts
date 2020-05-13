import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-me-rich',
  templateUrl: './make-me-rich.component.html',
  styleUrls: ['./make-me-rich.component.css']
})
export class MakeMeRichComponent implements OnInit {

  ticketInfoForm = new FormGroup({
    moneyToGain: new FormControl('', []),
    moneyToGive: new FormControl('', [Validators.required]),
    indicatorLimitNumberOfGames: new FormControl('', []),
    numberOfGames: new FormControl('', [])

  });

  constructor() { }

  ngOnInit(): void {
  }

  userWantsToLimitNumberOfGames() {
    return this.ticketInfoForm.get('indicatorLimitNumberOfGames').value === true;
  }

  submit(data) {
    console.log(data);
  }

}
