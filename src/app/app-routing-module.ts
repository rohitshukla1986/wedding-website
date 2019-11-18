import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OurStoryComponent} from './our-story/our-story.component';

const routes = [{
  path: 'ourStory',
  component: OurStoryComponent,
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
