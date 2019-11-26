import {Component} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menuButton.component.html',
  styleUrls: ['./menuButton.component.scss']
})
export class MenuButtonComponent {

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
