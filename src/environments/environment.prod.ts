export const environment = {
  production: true,
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
