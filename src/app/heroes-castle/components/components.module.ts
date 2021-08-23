import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ServiceModule } from '../services/service.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeroActionsComponent } from './heroes/hero-actions/hero-actions.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DirectivesModule } from '../directives/directives.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  DashboardComponent,
  HeroDetailComponent,
  HeroSearchComponent,
  HeroesComponent,
  LoginComponent,
  HeroActionsComponent,
  ConfirmDialogComponent
];

const UI_MODULES = [
  MatCardModule,
  MatInputModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatDialogModule
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    ...UI_MODULES,
    DirectivesModule,
    ServiceModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    PipesModule
  ]
})
export class ComponentsModule {
}
