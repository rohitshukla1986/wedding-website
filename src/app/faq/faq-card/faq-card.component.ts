import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent {

  @Input()
  public text: string;

  @Input()
  public title: string;

  @Input()
  public imageName: string;

  constructor() {
  }
}
