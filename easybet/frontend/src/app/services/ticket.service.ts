import { Injectable } from '@angular/core';
import { TicketMatch } from '../models/ticket.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly saveTicketUrl: string = 'http://localhost:3000/tickets/';

  public matches = new BehaviorSubject<TicketMatch[]>([]);
  public currentMatches = this.matches.asObservable();

  constructor(public http:HttpClient) { }

  public addToTicket(_id: string, time: string, homeTeam:string, guestTeam:string, oddType: string, oddValue: number){    
    if(!this.matches.getValue().filter(match => match._id === _id).length){
      this.matches.getValue().push(new TicketMatch(_id,time,homeTeam,guestTeam, oddType, oddValue));
    }
  }

  public deleteMatch(match: TicketMatch): void{
    let array = this.matches.getValue().filter(m => m._id !== match._id);
    this.matches.next(array);
  }

  public saveTicket(username: string){  
    const body = {username, "matches": this.matches.getValue()};
    this.http.post(this.saveTicketUrl, body).subscribe();
    this.matches.next([]);
  }
}

