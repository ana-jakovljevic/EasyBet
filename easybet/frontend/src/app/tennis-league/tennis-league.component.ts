import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TennisService } from '../services/tennis.service';

@Component({
  selector: 'app-tennis-league',
  templateUrl: './tennis-league.component.html',
  styleUrls: ['./tennis-league.component.css']
})
export class TennisLeagueComponent implements OnInit {
  public leagues: Observable<Object>;
  private checkedLeagues: string[] = [];

  @Output('emitCheckedChange')
  public emitCheckedChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private tennisService: TennisService) { 
    this.leagues = tennisService.getLeagues();
  }

  ngOnInit(): void {
  }

  public setCheckedLeague(tennisLeagues){
    
    this.checkedLeagues = [];
    let selectedLeagues = tennisLeagues.selectedOptions.selected;
    for (let i = 0; i < selectedLeagues.length; i++) {
      this.checkedLeagues.push(selectedLeagues[i]._value);
    }
    this.emitCheckedChange.emit(this.checkedLeagues);

  } 
}
