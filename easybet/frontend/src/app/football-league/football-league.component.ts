import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  @Output('emitCheckedChange')
  public emitCheckedChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private footballService: FootballService) {
    this.leagues = this.footballService.getLeagues()
  }

  ngOnInit(){
    
  }

  public setCheckedLeague(event: Event){
    let target = <HTMLInputElement>event.target;
    if(target.checked){
      this.checkedLeagues.push(target.name);
    } else {
      this.checkedLeagues.splice(this.checkedLeagues.indexOf(target.name),1);
    }

    this.emitCheckedChange.emit(this.checkedLeagues);
  }
}
