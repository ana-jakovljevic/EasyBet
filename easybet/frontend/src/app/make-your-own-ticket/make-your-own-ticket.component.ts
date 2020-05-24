import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballMatch } from '../models/football-match.model';
import { FootballService } from '../services/football.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-make-your-own-ticket',
  templateUrl: './make-your-own-ticket.component.html',
  styleUrls: ['./make-your-own-ticket.component.css']
})
export class MakeYourOwnTicketComponent implements OnInit {

  public footballMatches: Observable<FootballMatch[]>;

  constructor(private footballService: FootballService,
              private ticketService: TicketService) {
    this.footballMatches = this.footballService.getFootballMatches();
  }

  public addToTicket(match: FootballMatch, event: Event){
    this.ticketService.addToTicket(
      match._id,
      match.time, 
      match.homeTeam, 
      match.guestTeam,
      (<HTMLTableHeaderCellElement>event.target).id,
      Number.parseFloat((<HTMLTableHeaderCellElement>event.target).textContent));
  }


  ngOnInit(): void {
    
  }

  public onCheckedChange(leagues: string[]){
    this.footballMatches = this.footballService.setFootballMatches(leagues); 
  }


}
