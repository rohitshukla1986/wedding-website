import { Injectable } from '@angular/core';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() {
  }

  initialiseFb() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '531411050741896',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  submitLogin(): any {
    let a: any;

    this.initialiseFb();

    window['FB'].login((response) => {
      console.log('login response', response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name, email'
        }, (userInfo) => {

          console.log('user information');
          console.log(userInfo);
          a = userInfo;
        });

      } else {
        console.log('User login failed');
      }
    }, {scope: 'email'});

    return a;
  }
}
