import { Injectable } from '@angular/core';
import { FootballService } from './football.service';
import { BasketballService } from './basketball.service';
import { TennisService } from './tennis.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private footballLeagues: Observable<Object>;
  private tennisLeagues: Observable<Object>;
  private basketballLeagues: Observable<Object>;

  constructor(private footballService: FootballService,
              private basketballService: BasketballService,
              private tennisService: TennisService) { 
    this.footballLeagues = footballService.getLeagues();
    this.basketballLeagues = this.basketballService.getLeagues();
    this.tennisLeagues = tennisService.getLeagues();
  }

  public getLeagues(sport: string): Observable<Object>{
    if(sport === "football"){
        return this.footballLeagues;
    } else if(sport === "basketball"){
      return this.basketballLeagues;
    } else if(sport === "tennis"){
      return this.tennisLeagues;
    } else {
      return new Observable<Object>();
    }
  }
}
