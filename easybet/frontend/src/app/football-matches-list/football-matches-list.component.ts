import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { FootballMatch } from '../models/football-match.model';
import { Observable } from 'rxjs';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-football-matches-list',
  templateUrl: './football-matches-list.component.html',
  styleUrls: ['./football-matches-list.component.css']
})

export class FootballMatchesListComponent implements OnInit {
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

}
