import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public topOfPage = true;

  constructor() {
  }

  ngOnInit(): void {
    window.onscroll = () => this.onScroll();
  }

  onScroll() {
    this.topOfPage = !(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
  }
}
