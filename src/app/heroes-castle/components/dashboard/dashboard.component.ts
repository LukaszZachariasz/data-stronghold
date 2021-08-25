import { Component } from '@angular/core';
import { HeroesCastleStateService } from '../../store/heroes-castle-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  collapsed = false;
  searchSectionTitle$ = this.heroesCastleStore.selectSearchParamsPreview();

  constructor(private heroesCastleStore: HeroesCastleStateService) {}
}
