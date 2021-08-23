import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ServiceModule } from '../services/service.module';
import { HeroActionsComponent } from './heroes/hero-actions/hero-actions.component';
import { DirectivesModule } from '../directives/directives.module';
import { UiKitModule } from '../../shared/ui-kit/ui-kit.module';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [
  DashboardComponent,
  HeroDetailComponent,
  HeroSearchComponent,
  HeroesComponent,
  LoginComponent,
  HeroActionsComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    UiKitModule,
    DirectivesModule,
    ServiceModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    PipesModule,
    ReactiveComponentModule
  ]
})
export class ComponentsModule {
}
