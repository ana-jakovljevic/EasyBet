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
  public footballMatches: FootballMatch[] = [];

  constructor(private footballService: FootballService) {
    this.footballService.getFootballMatches()
      .subscribe((matches: FootballMatch[]) => {
        this.footballMatches = matches;
    });
  }

  ngOnInit(): void {
  }

}
