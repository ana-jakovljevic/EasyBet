import { Component, OnInit } from '@angular/core';
import { TennisMatch } from '../models/tennis-match.model';
import { TennisService } from '../services/tennis.service';
import { Observable } from 'rxjs';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tennis-matches-list',
  templateUrl: './tennis-matches-list.component.html',
  styleUrls: ['./tennis-matches-list.component.css']
})
export class TennisMatchesListComponent implements OnInit {
  public tennisMatches: Observable<TennisMatch[]>;

  constructor(private tennisService: TennisService,
              private ticketService: TicketService) { 
    this.tennisMatches = this.tennisService.getTennisMatches();
  }

  public addToTicket(match: TennisMatch, event: Event){
    this.ticketService.addToTicket(
      match._id,
      match.time, 
      match.homeTeam, 
      match.guestTeam,
      (<HTMLTableHeaderCellElement>event.target).id,
      Number.parseFloat((<HTMLTableHeaderCellElement>event.target).textContent));
  }

  public onCheckedChange(leagues: string[]){
    this.tennisMatches = this.tennisService.setTennisMatches(leagues); 
  }

  ngOnInit(): void {
  }

}
