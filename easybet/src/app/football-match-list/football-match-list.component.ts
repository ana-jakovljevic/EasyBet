import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { FootballModel } from 'src/models/football.model';

@Component({
  selector: 'app-football-match-list',
  templateUrl: './football-match-list.component.html',
  styleUrls: ['./football-match-list.component.css']
})
export class FootballMatchListComponent implements OnInit {
  public footballMatches: FootballModel[];
  constructor(private footballService: FootballService) {
    this.footballMatches = this.footballService.getFootballMatches();
  }

  ngOnInit(): void {
  }

}
