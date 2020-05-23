import { Injectable } from '@angular/core';
import { TicketMatch } from '../models/ticket.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketsModel } from '../models/tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly ticketUrl: string = 'http://localhost:3000/tickets/';

  public matches = new BehaviorSubject<TicketMatch[]>([]);
  public currentMatches = this.matches.asObservable();

  constructor(public http:HttpClient) { }

  public addToTicket(_id: string, time: string, homeTeam:string, guestTeam:string, oddType: string, oddValue: number){    
    if(Number.isNaN(oddValue)){
      return;
    }

    if(!this.matches.getValue().filter(match => match._id === _id).length){
      this.matches.getValue().push(new TicketMatch(_id,time,homeTeam,guestTeam, oddType, oddValue));
    }
  }

  public deleteMatch(match: TicketMatch): void{
    let array = this.matches.getValue().filter(m => m._id !== match._id);
    this.matches.next(array);
  }

  public saveTicket(username: string, matches?: TicketMatch[]){  
    let body;
    if(matches){
      body = {username, "matches": matches};
    } else {
      body = {username, "matches": this.matches.getValue()};
    }
    
    this.http.post(this.ticketUrl, body).subscribe();
    this.matches.next([]);
  }

  public getTickets(username: string): Observable<TicketsModel[]> {
    return this.http.get<TicketsModel[]>(this.ticketUrl + "history/" + username);
  }

  public generateTicket(quota: string, sport: string, leagues: string[], limit: string): Observable<TicketMatch[]>{
    let params = new HttpParams();
    params = params.append('quota', quota).append('sport', sport).append('leagues', leagues.join(',')).append("limit", limit);
    
    return this.http.get<TicketMatch[]>(this.ticketUrl + "makeMeRich", {params});
  }
}