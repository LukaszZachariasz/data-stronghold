import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { PageUrls } from '../const/page-urls';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private oktaAuthService: OktaAuthService,
    private router: Router,
  ) {}

  canActivate = () => this.isAuthenticated();

  canLoad = () => this.isAuthenticated();

  private isAuthenticated() {
    return this.oktaAuthService.isAuthenticated().then((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        this.router.navigate([PageUrls.LOGIN_PAGE_URL]);
        return false;
      }
      return true;
    });
  }
}
