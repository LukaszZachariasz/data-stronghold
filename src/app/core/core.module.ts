import { NgModule } from '@angular/core';
import { OKTA_CONFIG } from '@okta/okta-angular';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [LoginWidgetComponent],
  imports: [CommonModule],
  exports: [LoginWidgetComponent],
  providers: [
    AuthGuard,
    {
      provide: OKTA_CONFIG,
      useValue: environment.oktaAuthConfig
    }
  ]
})
export class CoreModule {}
