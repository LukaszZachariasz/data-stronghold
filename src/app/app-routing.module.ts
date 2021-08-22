import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./heroes-castle/heroes-castle.module').then(m => m.HeroesCastleModule)
  },
  {
    path: 'dashboard',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
