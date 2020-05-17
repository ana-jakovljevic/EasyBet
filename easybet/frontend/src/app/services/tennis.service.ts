import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TennisMatch } from '../models/tennis-match.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TennisService {

  private tennisMatches: Observable<TennisMatch[]>;
  private readonly tennisMatchesUrl = "http://localhost:3000/matches/tennis";

  constructor(private http: HttpClient) { 
    this.readFileTennis();
  }

  private readFileTennis(): Observable<TennisMatch[]> {
    this.tennisMatches = this.http.get<TennisMatch[]>(this.tennisMatchesUrl);
    return this.tennisMatches;
  }

  public getTennisMatches(): Observable<TennisMatch[]> {
    return this.tennisMatches;
  }
}
