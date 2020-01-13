import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{
  constructor() {
  }

  ngOnInit() {
    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.paddingTop = '0';
          panel.style.paddingLeft = '35px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.paddingTop = '9px';
          panel.style.paddingLeft = '35px';
        }
      });
    }
  }
}
