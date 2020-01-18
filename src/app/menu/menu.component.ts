import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public currentSection: string;

  public topOfPage = true;

  constructor() {
  }

  ngOnInit(): void {
    window.onscroll = () => this.onScroll();
  }

  onScroll() {
    console.log(this.currentSection)
    this.topOfPage = !(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
  }
}
