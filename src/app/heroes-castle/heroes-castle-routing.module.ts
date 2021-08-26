import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesExistsResolver } from './services/heroes-exists-resolver.service';
import { DataNotFoundComponent } from '../shared/components/data-not-found/data-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      heroesExist: HeroesExistsResolver
    }
  },
  {
    path: 'hero-details/:heroId',
    component: HeroDetailComponent,
  },
  {
    path: 'no-data',
    component: DataNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HeroesCastleRoutingModule {
}
