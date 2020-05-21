import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TennisMatch } from '../models/tennis-match.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TennisService {

  private tennisMatches: Observable<TennisMatch[]>;
  private readonly tennisMatchesUrl = "http://localhost:3000/matches/tennis";

  constructor(private http: HttpClient) { 
    this.tennisMatches = this.http.get<TennisMatch[]>(this.tennisMatchesUrl);
  }

  public setTennisMatches(checkedLeagues: string[]): Observable<TennisMatch[]>{
    let params = new HttpParams();
    params = params.append('leagues', checkedLeagues.join(','));
    this.tennisMatches = this.http.get<TennisMatch[]>(this.tennisMatchesUrl, {params});
    return this.tennisMatches;
  }

  public getTennisMatches(): Observable<TennisMatch[]> {
    return this.tennisMatches;
  }

  public getLeagues(): Observable<Object>{
    return this.http.get(this.tennisMatchesUrl + '/leagues');
  }
}
