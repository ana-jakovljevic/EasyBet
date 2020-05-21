import { Injectable } from '@angular/core';
import { TicketMatch } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public matches: TicketMatch[] = [];
  
  constructor() {

  }

  public addToTicket(_id: string, time: string, homeTeam:string, guestTeam:string, oddType: string, oddValue: number){    
    if(!this.matches.filter(match => match._id === _id).length){
      this.matches.push(new TicketMatch(_id,time,homeTeam,guestTeam, oddType, oddValue)); 
    }
  }

  public deleteMatch(match: TicketMatch): TicketMatch[]{
    this.matches = this.matches.filter(m => m._id !== match._id);
    return this.matches;
  }

}

