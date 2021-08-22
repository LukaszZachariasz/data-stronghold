import { Component, ViewChild } from '@angular/core';
import { HeroSearchParams } from '../../model/hero-search-params.interface';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { ParseUtil } from '../../../shared/utils/parse-util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  @ViewChild(HeroesComponent) heroesComponent: HeroesComponent;
  @ViewChild(HeroSearchComponent) searchComponent: HeroSearchComponent;
  searchTitle = 'Hero search';

  onSearch($event: HeroSearchParams) {
    this.heroesComponent.refreshData($event);
  }

  setTitle(isParam: boolean) {
    this.searchTitle = isParam ?
      ParseUtil.objectNotNullPropsToString(this.searchComponent.searchParamsFormGroupValue)
      : '';
  }
}
