import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-football-league',
  templateUrl: './football-league.component.html',
  styleUrls: ['./football-league.component.css']
})
export class FootballLeagueComponent implements OnInit {

  private checkedLeagues: string[] = [];
  public leagues: Observable<Object>;

  constructor(private footballService: FootballService) {
    this.leagues = this.footballService.getLeagues()
  }

  public getCheckedLeagues(event: Event) {
    if((<HTMLInputElement>event.target).checked) {
      this.checkedLeagues.push((<HTMLInputElement>event.target).name);
    } else {
      this.checkedLeagues.splice(
        this.checkedLeagues.indexOf((<HTMLInputElement>event.target).name),
        1
      );
    }
    
    this.footballService.setFootballMatches(this.checkedLeagues);
  }

  ngOnInit(): void {
  }

}
