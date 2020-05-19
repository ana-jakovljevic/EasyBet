import { Component, OnInit } from '@angular/core';
import { LeagueModel } from '../models/league.model';
import { FootballService } from '../services/football.service';
import { FootballMatch } from '../models/football-match.model';

@Component({
  selector: 'app-football-league',
  templateUrl: './football-league.component.html',
  styleUrls: ['./football-league.component.css']
})
export class FootballLeagueComponent extends LeagueModel implements OnInit {

  private chackedLeague: string[] = [];

  constructor(private footballService: FootballService) {
    super();
    this.footballService.getFootballMatches()
      .subscribe((matches: FootballMatch[]) => {
        let tmpLeague = [];
        for (let match of matches) {
          if (tmpLeague.indexOf(match.league) == -1) {
            tmpLeague.push(match.league);
          }
        }
        this.leagues = tmpLeague;
      });
  }

  public getChackedLeagues(event: Event) {
    if((<HTMLInputElement>event.target).checked) {
      this.chackedLeague.push((<HTMLInputElement>event.target).name);
    } else {
      this.chackedLeague.splice(
        this.chackedLeague.indexOf((<HTMLInputElement>event.target).name),
        1
      );
    }
    console.log(this.chackedLeague);

    this.footballService.setChackedFootballMatches(this.chackedLeague);
  }

  ngOnInit(): void {
  }

}
