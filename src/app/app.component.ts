import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wedding Website';
  public mobileNavBarTitle = 'Rohit Weds Raji';

  constructor(private router: Router) {}

  public changeMobileNavBarTitleOnScroll(url: string) {
    const sectionTitle = url.split('/')[1]
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str) {
        return str.toUpperCase();
      });

    const scrollDistanceFromTop = document.documentElement.scrollTop;
    if (scrollDistanceFromTop > 600) {
      this.mobileNavBarTitle = sectionTitle;
    } else {
      this.mobileNavBarTitle = 'Rohit Weds Raji';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeMobileNavBarTitleOnScroll(this.router.url);
  }
}
