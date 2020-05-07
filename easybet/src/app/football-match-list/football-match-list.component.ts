import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { FootballModel } from 'src/models/football.model';
import * as data from '../fudbal.json';

@Component({
  selector: 'app-football-match-list',
  templateUrl: './football-match-list.component.html',
  styleUrls: ['./football-match-list.component.css']
})
export class FootballMatchListComponent implements OnInit {
  public footballMatches: FootballModel[];

  constructor(footballService: FootballService) {
    this.footballMatches = footballService.getFootballMatches();
  }





  ngOnInit(): void {
  }

}
