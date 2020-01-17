import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CountDownTimerComponent} from './countDownTimer/countDownTimer.component';
import {MenuComponent} from './menu/menu.component';
import {OurStoryComponent} from './our-story/our-story.component';
import {HomePageComponent} from './home-page/home-page.component';
import {WeddingDayComponent} from './wedding-day/wedding-day.component';
import {OtherEventsComponent} from './other-events/other-events.component';
import {TravelComponent} from './travel/travel.component';
import {FaqComponent} from './faq/faq.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {ParticlesModule} from 'angular-particle';
import {AppRoutingModule} from './app-routing.module';
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MglTimelineModule} from 'angular-mgl-timeline';
import {ScrollSpyDirective} from './app-scroll-spy.directive';
import {EventCardComponent} from './other-events/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    MenuComponent,
    MenuItemComponent,
    OurStoryComponent,
    HomePageComponent,
    WeddingDayComponent,
    OtherEventsComponent,
    TravelComponent,
    PhotoGalleryComponent,
    FaqComponent,
    ScrollSpyDirective,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MglTimelineModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
