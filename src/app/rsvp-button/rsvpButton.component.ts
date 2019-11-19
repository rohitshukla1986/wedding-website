import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from '../modal/modal.service';
declare var FB: any;

@Component({
  selector: 'app-rsvp-button',
  templateUrl: './rsvpButton.component.html',
  styleUrls: ['./rsvpButton.component.scss']
})
export class RsvpButtonComponent implements OnInit {

  @Input()
  public firstName: string;

  @Input()
  public lastName: string;

  @Output()
  public userDetails = new EventEmitter();
  private bodyText: string;


  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '531411050741896',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();

      this.bodyText = 'This text can be updated in modal 1';
    };

    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  submitLogin() {
      window['FB'].login((response) => {
        console.log('login response', response);
        if (response.authResponse) {

          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {

            this.userDetails.emit(userInfo);
            console.log('user information');
            console.log(userInfo);
            this.openModal('custom-modal-1');
          });

        } else {
          console.log('User login failed');
        }
      }, {scope: 'email'});
    }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
