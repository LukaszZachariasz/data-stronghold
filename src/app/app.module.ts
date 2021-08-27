import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from '@angular/flex-layout';
import { HeroesCastleModule } from './heroes-castle/heroes-castle.module';
import { OktaAuthModule, } from '@okta/okta-angular';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppRootStoreModule } from './store/app-root-store.module';
import { CoreModule } from './core/core.module';

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
    OktaAuthModule,
    AppRootStoreModule,
    SharedModule,
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
