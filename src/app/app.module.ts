import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { HeroesCastleModule } from './heroes-castle/heroes-castle.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { OKTA_CONFIG, OktaAuthModule, OktaAuthService, } from '@okta/okta-angular';
import { Router } from '@angular/router';

const config = {
  issuer: 'https://dev-82756562.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  postLogoutRedirectUri: window.location.origin + '/login',
  clientId: '0oa1jw7p4ntf5HqAv5d7',
  pkce: true
};

export function onAuthRequired(oktaAuth: OktaAuthService, injector: Injector) {
  const router = injector.get(Router);
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}


const FEATURE_MODULES = [
  HeroesCastleModule
];

@NgModule({
  imports: [
    ...FEATURE_MODULES,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    StoreModule.forRoot({}),
    OktaAuthModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    }),
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
