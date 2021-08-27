import { Injectable } from '@angular/core';
import {
  selectCastleHeroesPage,
  selectPagedHeroById,
  selectPaginationData,
  selectSearchData,
  selectSearchParamsPreview
} from './heroes-castle-store.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class HeroesCastleStateService {
  constructor(
    private readonly store: Store,
  ) {}

  selectSearchParamsPreview = () => this.store.select(selectSearchParamsPreview);

  selectSearchData = () => this.store.select(selectSearchData);

  selectPaginationData = () => this.store.select(selectPaginationData);

  selectCastleHeroesPage = () => this.store.select(selectCastleHeroesPage);

  selectPagedHeroById = (heroId: number) => this.store.select(selectPagedHeroById(heroId));
}
