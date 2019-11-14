import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menuButton.component.html',
  styleUrls: ['./menuButton.component.css']
})
export class MenuButtonComponent {
  @Output()
  public emitMenuToggled = new EventEmitter<boolean>();

  private menuToggled = false;

  constructor() {
  }

  public onMenuButtonToggle() {
    this.menuToggled = !this.menuToggled;
    this.emitMenuToggled.emit(this.menuToggled);
  }
}
