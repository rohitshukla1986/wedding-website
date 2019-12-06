import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input()
  public className: string;

  @Input()
  public url: string;

  @Input()
  public title: string;

  constructor() {
  }

  scrollIntoView() {
    const element = document.getElementById('router-outlet');
    element.scrollIntoView();
  }

  closeMenu() {
    const checkbox = <HTMLInputElement>document.getElementById('navi-toggle');
    checkbox.checked = false;
  }
}
