import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayComponent } from './play/play.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LogInComponent,
    HomePageComponent,
    PlayComponent,
    CheckComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
