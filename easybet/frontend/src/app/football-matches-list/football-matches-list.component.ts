import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { FootballMatch } from '../models/football-match.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-football-matches-list',
  templateUrl: './football-matches-list.component.html',
  styleUrls: ['./football-matches-list.component.css']
})

export class FootballMatchesListComponent implements OnInit {
  public footballMatches: Observable<FootballMatch[]>;

  constructor(private footballService: FootballService) {
    this.footballMatches = this.footballService.getFootballMatches();
  }

  public addToTicket(match: FootballMatch, event: Event){
    console.log(match.time);
    console.log(match.guestTeam);
    console.log(match.homeTeam);
    console.log((<HTMLTableHeaderCellElement>event.target).textContent);
  }

  ngOnInit(): void {
  }

}
