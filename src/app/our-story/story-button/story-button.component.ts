import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-story-button',
  templateUrl: './story-button.component.html',
  styleUrls: ['./story-button.component.scss']
})
export class StoryButtonComponent {

  @Input()
  public storyText: string;

  @Input()
  public title: string;

  @Input()
  public imageName: string;

  constructor() {
  }
}
