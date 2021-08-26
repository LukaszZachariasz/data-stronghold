import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pagination } from '../model/pagination';
import { HeroSearchParams } from '../model/hero-search-params';
import {
  HeroesReset,
  LoadHeroes,
  PaginateHeroes,
  RemoveHero,
  SearchHeroes,
  UpdateSearchPreviewParams
} from './heroes-castle-store.actions';


@Injectable()
export class HeroesCastleActionService {
  constructor(
    private readonly store: Store,
  ) {}

  loadHeroes() {
    this.store.dispatch(LoadHeroes());
  }

  paginateData(pagination: Pagination) {
    this.store.dispatch(PaginateHeroes({ pagination }));
  }

  updateSearchPreviewData(heroSearchParams: HeroSearchParams) {
    this.store.dispatch(UpdateSearchPreviewParams({ searchParamsPreview: heroSearchParams }));
  }

  search(searchFormValue: HeroSearchParams) {
    this.store.dispatch(SearchHeroes({ searchParams: searchFormValue }));
  }

  reset() {
    this.store.dispatch(HeroesReset());
  }

  remove(id: number) {
    this.store.dispatch(RemoveHero({ id }));
  }
}
