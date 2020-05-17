import { Component, OnInit } from '@angular/core';
import { BasketballMatch } from '../models/basketball-match.model';
import { BasketballService } from '../services/basketball.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basketball-matches-list',
  templateUrl: './basketball-matches-list.component.html',
  styleUrls: ['./basketball-matches-list.component.css']
})
export class BasketballMatchesListComponent implements OnInit {
  public basketballMatches: Observable<BasketballMatch[]>;

  constructor(private basketballService: BasketballService) { 
    this.basketballMatches = basketballService.getBasketballMatches();
  }

  ngOnInit(): void {
  }

}
