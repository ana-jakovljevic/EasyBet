import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { TicketsModel } from '../models/tickets.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public username: string = "";
  public tickets: Observable<TicketsModel[]>;

  constructor(private ticketService: TicketService,
              private authenticationService: AuthenticationService,
              private router: Router ){
    authenticationService.username.subscribe(username => {
      this.username = username;
      this.tickets = this.ticketService.getTickets(this.username);
    });
  }

  ngOnInit(): void {
  }

  deleteTicket(ticket) {
    this.ticketService.deleteTicket(ticket.username, ticket._id).subscribe(ret => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/check']);
      });
    });
  }

}
