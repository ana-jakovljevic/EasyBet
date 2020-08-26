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
    private router: Router) {

    this.username = this.authenticationService.currentUserName;
    this.tickets = this.ticketService.getTickets(this.username);

  }

  ngOnInit(): void {
  }

  deleteTicket(ticket) {
    this.ticketService.deleteTicket(ticket.username, ticket._id).subscribe(ret => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/check']);
      });
    });
  }

  oddString(oddType: string): string {
    let odd: string = "";
    if (oddType == "winner1" || oddType == "winner2") {
      return oddType;
    }
    if (oddType == "FirstSet1") {
      return "FS1";
    } else if (oddType == "FirstSet2") {
      return "FS2";
    }
    if (oddType == "hen1") {
      return "H1";
    } else if (oddType == "hen2") {
      return "H2";
    }

    odd = oddType.substring(3);
    if (odd == "0to2")
      odd = "0-2";
    if (odd == "3plus")
      odd = "3+";
    if (odd == "4plus")
      odd = "4+";

    return odd;
  }

}
