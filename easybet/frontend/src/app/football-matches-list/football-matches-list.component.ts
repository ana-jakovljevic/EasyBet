import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { MatchModel } from '../models/match.model';

@Component({
  selector: 'app-football-matches-list',
  templateUrl: './football-matches-list.component.html',
  styleUrls: ['./football-matches-list.component.css']
})
export class FootballMatchesListComponent implements OnInit {
  public footballMatches: MatchModel[];

  constructor(footballService: FootballService) {
    this.footballMatches = footballService.getFootballMatches();
  }

  ngOnInit(): void {
  }

}
