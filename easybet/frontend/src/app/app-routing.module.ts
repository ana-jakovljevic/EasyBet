import { AccountComponent } from './account/account.component';
import { CheckComponent } from './check/check.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../app/register/register.component';
import { LogInComponent } from '../app/log-in/log-in.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { MakeMeRichComponent } from '../app/make-me-rich/make-me-rich.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { MakeYourOwnTicketComponent } from './make-your-own-ticket/make-your-own-ticket.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'makeMeRich', component: MakeMeRichComponent},
  { path: 'check', component: CheckComponent, canActivate: [AuthenticationGuardService]}, 
  { path: 'account', component: AccountComponent, canActivate: [AuthenticationGuardService]},
  { path: 'makeYourOwnTicket', component: MakeYourOwnTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
