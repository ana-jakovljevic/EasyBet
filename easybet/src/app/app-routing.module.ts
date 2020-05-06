import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../app/register/register.component';
import { LogInComponent } from '../app/log-in/log-in.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { PlayComponent } from './play/play.component';
import { CheckComponent } from './check/check.component';
import { FootballMatchListComponent } from './football-match-list/football-match-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'play', component: PlayComponent },
  { path: 'checkGame', component: CheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
