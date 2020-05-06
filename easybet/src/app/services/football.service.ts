import { Injectable, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { FootballModel } from 'src/models/football.model';
import * as data from '../fudbal.json';
@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private footballMatches: FootballModel[] = [];
  constructor() {
    this.readFileFootball();

  }
  public readFileFootball(): void {
    for (let i = 0; i < 50; i++) {
      let football = new FootballModel(data[i].date, data[i].leagueName, data[i].teamHome, data[i].teamGuest, data[i].odds);
      this.footballMatches.push(football);
      console.log(football);
    }

  }

  public getFootballMatches(): FootballModel[] {
    return this.footballMatches;
  }

}


