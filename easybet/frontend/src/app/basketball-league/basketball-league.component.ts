import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketballService } from '../services/basketball.service';

@Component({
  selector: 'app-basketball-league',
  templateUrl: './basketball-league.component.html',
  styleUrls: ['./basketball-league.component.css']
})
export class BasketballLeagueComponent implements OnInit {
  public leagues: Observable<Object>;
  private checkedLeagues: string[] = [];
  
  @Output('emitCheckChange')
  public emitCheckedChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private basketballService: BasketballService){
    this.leagues = basketballService.getLeagues();
  }

  ngOnInit(): void {
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
