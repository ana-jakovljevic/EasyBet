import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketballMatch } from '../models/basketball-match.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketballService {

  private basketballMatches: Observable<BasketballMatch[]>;
  private readonly basketballMatchesUrl = "http://localhost:3000/matches/basketball";

  constructor(private http: HttpClient) { 
    this.readFileBasketball();
  }

  private readFileBasketball(): Observable<BasketballMatch[]> {
    this.basketballMatches = this.http.get<BasketballMatch[]>(this.basketballMatchesUrl);
    return this.basketballMatches;
  }

  public getBasketballMatches(): Observable<BasketballMatch[]> {
    return this.basketballMatches;
  }
}
