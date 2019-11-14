import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './countDownTimer/countDownTimer.component';
import { RsvpButtonComponent } from './rsvp-button/rsvpButton.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    RsvpButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
