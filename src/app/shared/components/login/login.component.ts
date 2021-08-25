import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuthService } from '@okta/okta-angular';
import { NavigationStart, Router } from '@angular/router';
import { Tokens } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login',
  template: `
      <!-- Container to inject the Sign-In Widget -->
      <div id="okta-signin-container"></div>
  `,
})
export class LoginComponent implements OnInit {
  authService;
  widget = new OktaSignIn({
    el: '#okta-signin-container',
    baseUrl: 'https://dev-82756562.okta.com/',
    authParams: {
      pkce: true
    },
    clientId: '0oa1jw7p4ntf5HqAv5d7',
    redirectUri: 'http://localhost:4200/'
  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.authService = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/login':
            break;
          case '/':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  async ngOnInit() {
    const originalUri = this.authService.getOriginalUri();
    if (!originalUri) {
      this.authService.setOriginalUri('/dashboard');
    }

    const tokens: Tokens = await this.widget.showSignInToGetTokens({
      el: '#okta-signin-container',
    });
    await this.authService.handleLoginRedirect(tokens);
    this.widget.hide();
  }
}
