import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {$} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wedding Website';
  public mobileNavBarTitle = 'Rohit Weds Raji';
  currentSection = '';

  constructor(private router: Router) {}

  public changeMobileNavBarTitleOnScroll(currentSection: string) {
    const sectionTitle = currentSection
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str) {
        return str.toUpperCase();
      });

    if (currentSection !== '') {
      this.mobileNavBarTitle = sectionTitle;
    } else {
      this.mobileNavBarTitle = 'Rohit Weds Raji';
    }
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;

    if (sectionId !== undefined) {
      this.changeMobileNavBarTitleOnScroll(this.currentSection);
    } else {
      this.changeMobileNavBarTitleOnScroll('rohitWedsRaji');
    }
  }
}
