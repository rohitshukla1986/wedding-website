import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wedding Website';
  public toggleMenuButton: boolean;

  toggleMenu(toggleMenuButton: boolean) {
    this.toggleMenuButton = toggleMenuButton;
  }
}
