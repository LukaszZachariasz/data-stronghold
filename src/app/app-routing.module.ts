import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canLoad: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canLoad: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canLoad: [AuthGuard] },
  { path: 'heroes', component: HeroesComponent, canLoad: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
