import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckComponent } from './check/check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootballMatchesListComponent } from './football-matches-list/football-matches-list.component';
import { MakeMeRichComponent } from './make-me-rich/make-me-rich.component';
import { AccountComponent } from './account/account.component';

import { HttpClientModule } from '@angular/common/http';
import { BasketballMatchesListComponent } from './basketball-matches-list/basketball-matches-list.component';
import { TennisMatchesListComponent } from './tennis-matches-list/tennis-matches-list.component';
import { FootballLeagueComponent } from './football-league/football-league.component';
import { TicketComponent } from './ticket/ticket.component';
import { MulPipe } from './pipes/mul.pipe';
import { TennisLeagueComponent } from './tennis-league/tennis-league.component';
import { BasketballLeagueComponent } from './basketball-league/basketball-league.component';
import { MakeYourOwnTicketComponent } from './make-your-own-ticket/make-your-own-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LogInComponent,
    HomePageComponent,
    CheckComponent,
    FootballMatchesListComponent,
    MakeMeRichComponent,
    AccountComponent,
    BasketballMatchesListComponent,
    TennisMatchesListComponent,
    FootballLeagueComponent,
    TicketComponent,
    MulPipe,
    TennisLeagueComponent,
    BasketballLeagueComponent,
    MakeYourOwnTicketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
