import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/auth-guard/auth-guard.service';
import { FlexModule } from '@angular/flex-layout';
import { HeroesCastleModule } from './heroes-castle/heroes-castle.module';

const FEATURE_MODULES = [
  HeroesCastleModule
];


@NgModule({
  imports: [
    ...FEATURE_MODULES,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    FlexModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
