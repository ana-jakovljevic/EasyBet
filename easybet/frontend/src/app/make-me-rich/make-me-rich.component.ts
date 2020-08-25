import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TicketInfoValidators } from './ticket-info.validators';
import { TicketService } from '../services/ticket.service';
import { TicketMatch } from '../models/ticket.model';
import { Observable } from 'rxjs';
import { LeagueService } from '../services/league.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-make-me-rich',
  templateUrl: './make-me-rich.component.html',
  styleUrls: ['./make-me-rich.component.css']
})

export class MakeMeRichComponent implements OnInit {
  public ticketInfoForm: FormGroup;
  public ticket: Observable<TicketMatch[]>;
  public notGenerated: boolean = true;
  public leagues: Observable<Object>;
  public selectedLeagues: string[] = [];
  public selectedSport: string = "";
  public username: string;

  constructor(private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private leagueService: LeagueService,
    private authenticationService: AuthenticationService) {
    this.ticketInfoForm = this.formBuilder.group({
      sport: ['', []],
      leagues: ['', []],
      quota: ['1', [Validators.min(1)]],
      limit: ['1', [Validators.min(1)]]
    });
    this.username = this.authenticationService.currentUserName;
  }

  ngOnInit(): void {
  }

  public submit(data) {
    this.ticket = this.ticketService.generateTicket(data.quota, this.selectedSport, this.selectedLeagues, data.limit);
    this.notGenerated = false;
    this.selectedLeagues = []
  }


  public onSportChange(event: Event) {
    this.leagues = this.leagueService.getLeagues(this.selectedSport);
    this.selectedLeagues = [];
  }

  public setSelectedLeagues(event: Event) {
    let target = <HTMLDivElement>event.target;

    let indeks = this.selectedLeagues.indexOf(target.textContent);
    if (indeks < 0) {
      this.selectedLeagues.push(target.textContent);
    } else {
      this.selectedLeagues.splice(indeks, 1);
    }
  }

  public saveTicket() {
    this.ticket.subscribe(ticket => {
      this.ticketService.saveTicket(this.username, ticket);
    });
    this.notGenerated = true;
  }

  public isSelected() {
    if (this.selectedSport === "" || this.selectedSport === "all") {
      return false;
    } else {
      return true;
    }
  }

}