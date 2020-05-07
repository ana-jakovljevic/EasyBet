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
    let football = new FootballModel(data[1].date, data[1].leagueName, data[1].teamHome, data[1].teamGuest, data[1].odds);
    this.footballMatches.push(football);
    football = new FootballModel(data[1].date, data[1].leagueName, data[1].teamHome, data[1].teamGuest, data[1].odds);
    this.footballMatches.push(football);
    football = new FootballModel(data[2].date, data[2].leagueName, data[2].teamHome, data[2].teamGuest, data[2].odds);
    this.footballMatches.push(football);
    football = new FootballModel(data[3].date, data[3].leagueName, data[3].teamHome, data[3].teamGuest, data[3].odds);
    this.footballMatches.push(football);


  }

  public getFootballMatches(): FootballModel[] {
    return this.footballMatches;
  }

}


