import { Injectable } from '@angular/core';
import {
  selectHeroesTotalCount,
  selectPaginationData,
  selectSearchData,
  selectSearchParamsPreview
} from '../heroes-castle-store.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class HeroesCastleStateService {
  constructor(
    private readonly store: Store,
  ) {}

  selectSearchParamsPreview = () => this.store.select(selectSearchParamsPreview);

  selectSearchData = () => this.store.select(selectSearchData);

  selectPaginationData = () => this.store.select(selectPaginationData);

  selectHeroesTotalCount = () => this.store.select(selectHeroesTotalCount);
}
