import { Component, ViewChild } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  @ViewChild(HeroSearchComponent) heroSearchComponent!: HeroSearchComponent;

  searchSectionTitle = 'Hero search';

  constructor() {}


  setTitleWithParams() {

  }
}
