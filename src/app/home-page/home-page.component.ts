import {Component} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public firstName: string;
  public lastName: string;

  constructor() {
  }

  onButtonPress(userDetails: any) {
    this.firstName = userDetails['first_name'];
    this.lastName = userDetails['last_name'];
  }

}
