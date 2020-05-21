import { Component, OnInit } from '@angular/core';
import { BasketballMatch } from '../models/basketball-match.model';
import { BasketballService } from '../services/basketball.service';
import { Observable } from 'rxjs';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-basketball-matches-list',
  templateUrl: './basketball-matches-list.component.html',
  styleUrls: ['./basketball-matches-list.component.css']
})
export class BasketballMatchesListComponent implements OnInit {
  public basketballMatches: Observable<BasketballMatch[]>;

  constructor(private basketballService: BasketballService,
              private ticketService: TicketService) { 
    this.basketballMatches = basketballService.getBasketballMatches();
  }

  public addToTicket(match: BasketballMatch, event: Event){
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
