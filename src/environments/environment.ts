// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* OKTA AUTH DATA:
    marekusername@mail.com
    silevis123
 */

export const environment = {
  production: false,
  heroApi: 'http://localhost:3000',
  debounceTimeRequest: 1000,
  tooltipTime: 500,
  minLengthText: 2,
  oktaAuthConfig: {
    issuer: 'https://dev-82756562.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/login/callback',
    postLogoutRedirectUri: 'http://localhost:4200/login',
    clientId: '0oa1kfkaakb6zd4zp5d7',
    pkce: true
  },
  oktaSignIn: {
    el: '#okta-login-widget-container',
    baseUrl: 'https://dev-82756562.okta.com',
    redirectUri: 'http://localhost:4200/login/callback',
    clientId: '0oa1kfkaakb6zd4zp5d7',
    authParams: {
      pkce: true
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
