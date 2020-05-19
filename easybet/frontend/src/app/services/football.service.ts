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
    this.readFileFootball();
  }

  private readFileFootball(): Observable<FootballMatch[]> {
    let leagues = [];
    let params = new HttpParams();
    params = params.append('leagues', leagues.join(','));
    this.footballMatches = this.http.get<FootballMatch[]>(this.footballMatchesUrl, {params: params});

    return this.footballMatches;
  }

  public getFootballMatches(): Observable<FootballMatch[]> {
    return this.footballMatches;
  }

  public setChackedFootballMatches(chackedLeagues: string[]): void {
    let params = new HttpParams();
    params = params.append('leagues', chackedLeagues.join(','));
    this.http.get<FootballMatch[]>(this.footballMatchesUrl, {params: params});
  }
}
