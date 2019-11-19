import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './countDownTimer/countDownTimer.component';
import { RsvpButtonComponent } from './rsvp-button/rsvpButton.component';
import { MenuButtonComponent } from './menu-button/menuButton.component';
import { OurStoryComponent } from './our-story/our-story.component';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import {HomePageComponent} from './home-page/home-page.component';
import {WeddingDayComponent} from './wedding-day/wedding-day.component';
import {OtherEventsComponent} from './other-events/other-events.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    RsvpButtonComponent,
    MenuButtonComponent,
    OurStoryComponent,
    ModalComponent,
    HomePageComponent,
    WeddingDayComponent,
    OtherEventsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
