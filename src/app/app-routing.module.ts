import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { LoginWidgetComponent } from './core/login-widget/login-widget.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login/callback',
    redirectTo: '',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginWidgetComponent
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () => import('./heroes-castle/heroes-castle.module').then(m => m.HeroesCastleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
