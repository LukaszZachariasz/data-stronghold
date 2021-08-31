import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pagination } from '../../model/pagination';
import { HeroSearchParams } from '../../model/hero-search-params';
import {
  HeroesReset,
  LoadHeroes,
  PaginateHeroes,
  RemoveHero,
  SearchHeroes,
  UpdateSearchPreviewParams
} from '../heroes-castle-store.actions';


@Injectable()
export class HeroesCastleActionService {
  constructor(
    private readonly store: Store,
  ) {}

  loadHeroes(): void {
    this.store.dispatch(LoadHeroes());
  }

  paginateData(pagination: Pagination): void {
    this.store.dispatch(PaginateHeroes({ pagination }));
  }

  updateSearchPreviewData(heroSearchParams: HeroSearchParams): void {
    this.store.dispatch(UpdateSearchPreviewParams({ searchParamsPreview: heroSearchParams }));
  }

  search(searchFormValue: HeroSearchParams): void {
    this.store.dispatch(SearchHeroes({ searchParams: searchFormValue }));
  }

  reset(): void {
    this.store.dispatch(HeroesReset());
  }

  remove(id: number): void {
    this.store.dispatch(RemoveHero({ id }));
  }
}
