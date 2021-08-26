import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OktaAuthService } from '@okta/okta-angular';
import { Tokens } from '@okta/okta-auth-js';

// @ts-ignore - this is tip from documentation
import * as OktaSignIn from '@okta/okta-signin-widget';
import { PageUrls } from '../../const/page-urls';

@Component({
  selector: 'app-secure',
  template: `<div id="okta-login-widget-container"></div>`
})
export class LoginWidgetComponent implements OnInit {
  private widget = new OktaSignIn(environment.oktaSignIn);

  constructor(
    private oktaAuthService: OktaAuthService,
  ) {}

  async ngOnInit() {
    const originalUri = this.oktaAuthService.getOriginalUri();
    if (!originalUri) {
      this.oktaAuthService.setOriginalUri(PageUrls.DASHBOARD_PAGE_URL);
    }
    const tokens: Tokens = await this.widget.showSignInToGetTokens({
      el: '#okta-login-widget-container',
    });
    await this.oktaAuthService.handleLoginRedirect(tokens);
    this.widget.hide();
  }
}
