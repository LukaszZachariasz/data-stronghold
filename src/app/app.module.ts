import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { HeroesCastleModule } from './heroes-castle/heroes-castle.module';
import { StoreModule } from '@ngrx/store';

const FEATURE_MODULES = [
  HeroesCastleModule
];

@NgModule({
  imports: [
    ...FEATURE_MODULES,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    FlexModule,
    StoreModule.forRoot({}),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
