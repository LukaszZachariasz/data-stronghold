import { Component, ViewChild } from '@angular/core';
import { HeroSearchParams } from '../../model/hero-search-params.interface';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  @ViewChild(HeroesComponent) heroesComponent: HeroesComponent;
  searchSectionTitle = 'Hero search';

  constructor() {}

  setTitleWithParams() {}

  onSearch($event: HeroSearchParams) {
    this.heroesComponent.refreshData($event);
  }
}
