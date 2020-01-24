import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-10%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(-20%)', opacity: 0}))
        ])
      ]
    ),
  ],
})
export class EventCardComponent {

  @Input()
  where = '';

  @Input()
  what = '';

  @Input()
  eventName = '';

  @Input()
  day = '';

  @Input()
  month = '';

  @Input()
  tbc = false;

  public expand = false;

  toggleExpand() {
    this.expand = !this.expand;
  }
}
