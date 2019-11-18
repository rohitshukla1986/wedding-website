import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './countDownTimer/countDownTimer.component';
import { RsvpButtonComponent } from './rsvp-button/rsvpButton.component';
import { MenuButtonComponent } from './menu-button/menuButton.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    RsvpButtonComponent,
    MenuButtonComponent,
    OurStoryComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
