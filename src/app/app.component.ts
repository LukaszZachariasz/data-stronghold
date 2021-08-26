import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Castle of heroes';
  isAuthenticated = false;
  loading = false;

  private destroyed$ = new Subject();

  constructor(
    public oktaAuthService: OktaAuthService,
    public router: Router,
  ) {
    this.oktaAuthService.$authenticationState.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }

  async login() {
    await this.oktaAuthService.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuthService.signOut();
    await this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
