import { Component } from '@angular/core';
import { HeroesCastleStateService } from '../../store/heroes-castle-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  expanded = true;
  searchSectionTitle$ = this.heroesCastleStateService.selectSearchParamsPreview();

  constructor(
    private heroesCastleStateService: HeroesCastleStateService,
  ) {}

  expandHandler(): void {
    this.expanded = !this.expanded;
  }
}
