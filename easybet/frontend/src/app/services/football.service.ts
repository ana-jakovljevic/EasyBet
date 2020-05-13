import { Injectable } from '@angular/core';
import * as data from '../../assets/fudbal.json';
import { MatchModel } from '../models/match.model';
@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private footballMatches: MatchModel[] = [];
  constructor() {
    this.readFileFootball();
  }

  public readFileFootball(): void {
    let football = new MatchModel(data[0].date, data[0].leagueName, data[0].teamHome, data[0].teamGuest, data[0].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[1].date, data[1].leagueName, data[1].teamHome, data[1].teamGuest, data[1].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[2].date, data[2].leagueName, data[2].teamHome, data[2].teamGuest, data[2].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[3].date, data[3].leagueName, data[3].teamHome, data[3].teamGuest, data[3].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[3].date, data[3].leagueName, data[3].teamHome, data[3].teamGuest, data[3].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[4].date, data[4].leagueName, data[4].teamHome, data[4].teamGuest, data[4].odds);
    this.footballMatches.push(football);
    football = new MatchModel(data[5].date, data[5].leagueName, data[5].teamHome, data[5].teamGuest, data[5].odds);
    this.footballMatches.push(football);


  }
  public getFootballMatches(): MatchModel[] {
    return this.footballMatches;
  }

}
