import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OurStoryComponent} from './our-story/our-story.component';
import {WeddingDayComponent} from './wedding-day/wedding-day.component';
import {OtherEventsComponent} from './other-events/other-events.component';
import {TravelComponent} from './travel/travel.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
  {path: '' , component: OurStoryComponent},
  {path: 'ourStory' , component: OurStoryComponent},
  {path: 'weddingDay' , component: WeddingDayComponent},
  {path: 'otherEvents' , component: OtherEventsComponent},
  {path: 'travel' , component: TravelComponent},
  {path: 'photoGallery' , component: PhotoGalleryComponent},
  {path: 'faq' , component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
