import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public firstName: string;
  public lastName: string;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() {
  }


  ngOnInit(): void {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 500,
          density: {
            enable: true,
            value_area: 868.0624057955
          }
        },
        color: {
          value: '#FFFFFF'
        },
        size: {
          value: 2,
          random: true,
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'top',
          random: false,
          straight: true,
          bounce: false,
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4
            }
          }
        }
      }
    };
  }

  onButtonPress(userDetails: any) {
    this.firstName = userDetails['first_name'];
    this.lastName = userDetails['last_name'];
  }

}
