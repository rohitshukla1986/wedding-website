import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  where = '';

  @Input()
  when = '';

  @Input()
  what = '';

  @Input()
  eventName = '';

  ngOnInit(): void {
    const acc = document.getElementsByClassName('infoAccordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.paddingTop = '0';
          panel.style.paddingLeft = '35px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.paddingTop = '9px';
          panel.style.paddingLeft = '35px';
        }
      });
    }
  }

}
