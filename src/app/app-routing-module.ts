import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './countDownTimer/countDownTimer.component';
import { RsvpButtonComponent } from './rsvp-button/rsvpButton.component';
import { MenuButtonComponent } from './menu-button/menuButton.component';
import { OurStoryComponent } from './our-story/our-story.component';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    RsvpButtonComponent,
    MenuButtonComponent,
    OurStoryComponent,
    ModalComponent
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
