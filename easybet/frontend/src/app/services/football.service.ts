import { Injectable } from '@angular/core';
import { FootballMatch } from '../models/football-match.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService { 
 
  private footballMatches: Observable<FootballMatch[]>;
  private readonly footballMatchesUrl = "http://localhost:3000/matches/football";
  
  constructor(private http: HttpClient) {
    this.setFootballMatches(['Germany - 1. Bundesliga', 'Germany - DFB Pokal']);
  }

  public getFootballMatches(): Observable<FootballMatch[]> {
    return this.footballMatches;
  }

  public setFootballMatches(checkedLeagues: string[]): void {
    let params = new HttpParams();
    params = params.append('leagues', checkedLeagues.join(','));

    // Not working
    this.footballMatches = this.http.get<FootballMatch[]>(this.footballMatchesUrl, {params: params});
  }

  public getLeagues(): Observable<Object>{
    return this.http.get(this.footballMatchesUrl + '/leagues');
  }
} 
