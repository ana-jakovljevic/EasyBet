import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { TicketMatch } from '../models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  public matches : TicketMatch[] = [];

  constructor(private ticketService: TicketService) { 
    this.matches = ticketService.matches;
  }

  public onDeleteMatch(match: TicketMatch){
    this.matches = this.ticketService.deleteMatch(match);
  }

  public onSaveTicket(){
    //TODO: send request to write in database, using ticket service
  }

  ngOnInit(): void {
  }

}
