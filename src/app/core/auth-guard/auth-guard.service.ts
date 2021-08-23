import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(public authService: OAuthService, public router: Router) {
  }

  canLoad(): boolean {
    return true;
  }
}
