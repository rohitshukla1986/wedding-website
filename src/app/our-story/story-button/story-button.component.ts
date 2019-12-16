import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-story-button',
  templateUrl: './story-button.component.html',
  styleUrls: ['./story-button.component.scss']
})
export class StoryButtonComponent {

  @Input()
  public storyText: string;

  @Input()
  public id: string;

  @Input()
  public buttonClassName: string;

  @Output()
  public valueChange = new EventEmitter();

  constructor() {
  }
}
