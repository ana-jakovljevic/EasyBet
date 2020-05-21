import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketballMatch } from '../models/basketball-match.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketballService {

  private basketballMatches: Observable<BasketballMatch[]>;
  private readonly basketballMatchesUrl = "http://localhost:3000/matches/basketball";

  constructor(private http: HttpClient) { 
    this.basketballMatches = this.http.get<BasketballMatch[]>(this.basketballMatchesUrl);
  }

  public setBasketballMatches(checkedLeagues: string[]): Observable<BasketballMatch[]>{
    let params = new HttpParams();
    params = params.append('leagues', checkedLeagues.join(','));
    this.basketballMatches = this.http.get<BasketballMatch[]>(this.basketballMatchesUrl,{params});
    return this.basketballMatches;
  }

  public getBasketballMatches(): Observable<BasketballMatch[]> {
    return this.basketballMatches;
  }

  public getLeagues(): Observable<Object>{
    return this.http.get(this.basketballMatchesUrl + '/leagues');
  }
}
