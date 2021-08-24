import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchParamsPreview } from '../../store/heroes-castle-store.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  collapsed = false;
  searchSectionTitle$ = this.store.select(selectSearchParamsPreview);

  constructor(private store: Store) {}
}
