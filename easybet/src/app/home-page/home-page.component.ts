import { Component, OnInit } from '@angular/core';
import { FootballModel } from 'src/models/football.model';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public footballMatches: FootballModel[];

  constructor(private footballService: FootballService) {
    this.footballMatches = this.footballService.getFootballMatches();
  }
  ngOnInit(): void {
  }

}
