import { Component, OnInit, ElementRef } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { TicketMatch } from '../models/ticket.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  public matches: TicketMatch[] = [];
  public username: string = "";

  constructor(private ticketService: TicketService,
              private authenticationService: AuthenticationService) { 
    ticketService.currentMatches.subscribe(matches => {
      this.matches = matches;
    });
    authenticationService.username.subscribe(username => {
      this.username = username;
    })
  }
  
  public onDeleteMatch(match: TicketMatch){
    this.ticketService.deleteMatch(match);
  }

  public onSaveTicket(){
    this.ticketService.saveTicket(this.username);
  }

  ngOnInit(): void {
  }

}
