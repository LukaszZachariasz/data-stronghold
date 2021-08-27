import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Tokens } from '@okta/okta-auth-js';
import { environment } from '../../../environments/environment';
import { PageUrls } from '../../const/page-urls';

// @ts-ignore - like documentation suggest
import * as OktaSignIn from '@okta/okta-signin-widget';

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
    this.widget.remove();
    if (!this.oktaAuthService.getOriginalUri()) {
      this.oktaAuthService.setOriginalUri(PageUrls.DASHBOARD_PAGE_URL);
    }
    const tokens: Tokens = await this.widget.showSignInToGetTokens({
      el: '#okta-login-widget-container'
    });
    await this.oktaAuthService.handleLoginRedirect(tokens);
    this.widget.hide();
  }
}
