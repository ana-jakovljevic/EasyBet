import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballMatch } from '../models/football-match.model';
import { FootballService } from '../services/football.service';
import { TicketService } from '../services/ticket.service';
import { BasketballService } from '../services/basketball.service';
import { BasketballMatch } from '../models/basketball-match.model';
import { TennisService } from '../services/tennis.service';
import { TennisMatch } from '../models/tennis-match.model';

@Component({
  selector: 'app-make-your-own-ticket',
  templateUrl: './make-your-own-ticket.component.html',
  styleUrls: ['./make-your-own-ticket.component.css']
})
export class MakeYourOwnTicketComponent implements OnInit {

  public footballMatches: Observable<FootballMatch[]>;
  public basketballMatches: Observable<BasketballMatch[]>;
  public tennisMatches: Observable<TennisMatch[]>;

  constructor(private footballService: FootballService,
              private basketballService: BasketballService,
              private tennisService: TennisService,
              private ticketService: TicketService) {
    this.footballMatches = this.footballService.getFootballMatches();
    this.basketballMatches = basketballService.getBasketballMatches();
    this.tennisMatches = tennisService.getTennisMatches();
  }

  public addToTicketFootball(match: FootballMatch, event: Event){
    this.ticketService.addToTicket(
      match._id,
      match.time, 
      match.homeTeam, 
      match.guestTeam,
      (<HTMLTableHeaderCellElement>event.target).id,
      Number.parseFloat((<HTMLTableHeaderCellElement>event.target).textContent));
  }

  public addToTicketBasketball(match: BasketballMatch, event: Event){
    this.ticketService.addToTicket(
      match._id,
      match.time, 
      match.homeTeam, 
      match.guestTeam,
      (<HTMLTableHeaderCellElement>event.target).id,
      Number.parseFloat((<HTMLTableHeaderCellElement>event.target).textContent));
  }

  public addToTicketTennis(match: TennisMatch, event: Event){
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
    this.basketballMatches = this.basketballService.setBasketballMatches(leagues); 
    this.tennisMatches = this.tennisService.setTennisMatches(leagues); 
  }


}
