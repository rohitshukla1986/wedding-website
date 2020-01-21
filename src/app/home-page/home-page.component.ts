import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input()
  set mobileNavBarTitle(value: string) {
    this._mobileNavBarTitle = value;
    this.animate = !this.animate;
  }

  @Input()
  public currentSection: string;

  public animate = false;
  public _mobileNavBarTitle: string;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() {
  }

  ngOnInit(): void {
    this.myStyle = {
      'position': 'absolute',
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
          value: 300,
          density: {
            enable: true,
            value_area: 868.0624057955
          }
        },
        color: {
          value: '#FFFFFF'
        },
        size: {
          value: 7,
          random: true,
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'top',
          random: true,
          straight: false,
          bounce: false,
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab'
          },
          modes: {
            grab: {
              distance: 50,
            }
          }
        }
      }
    };
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
