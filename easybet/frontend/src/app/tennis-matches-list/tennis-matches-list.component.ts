import { Component, OnInit } from '@angular/core';
import { TennisMatch } from '../models/tennis-match.model';
import { TennisService } from '../services/tennis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tennis-matches-list',
  templateUrl: './tennis-matches-list.component.html',
  styleUrls: ['./tennis-matches-list.component.css']
})
export class TennisMatchesListComponent implements OnInit {
  public tennisMatches: Observable<TennisMatch[]>;

  constructor(private tennisService: TennisService) { 
    this.tennisMatches = this.tennisService.getTennisMatches();
  }

  ngOnInit(): void {
  }

}
