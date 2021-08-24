import { Action, createReducer, on } from '@ngrx/store';
import { SaveHeroesResponse, UpdateSearchPreviewParams } from './heroes-castle-store.actions';
import { PaginationInterface } from '../model/pagination.interface';
import { HeroSearchParams } from '../model/hero-search-params.interface';
import { HeroesDataPage } from '../model/heroes-data-page';

export const heroesCastleFeatureKey = 'heroesCastle';

export interface HeroesCastleState {
  pagination: PaginationInterface;
  searchParams?: HeroSearchParams;
  heroesDataPage: HeroesDataPage;
  searchParamsPreview?: HeroSearchParams;
}

export const initialState: HeroesCastleState = {
  pagination: {
    pageIndex: 0,
    pageSize: 5
  },
  heroesDataPage: {
    heroes: [],
    totalElements: 0
  },
};

const reducer = createReducer(
  initialState,
  on(SaveHeroesResponse, (state, data) => ({
    ...state,
    heroesDataPage: {
      heroes: data.heroesResponse.data,
      totalElements: data.heroesResponse.totalElements
    }
  })),
  on(UpdateSearchPreviewParams, (state, data) => ({
    ...state,
    searchParamsPreview: data.searchParamsPreview
  }))
);

export function heroesCastleReducer(state: HeroesCastleState, action: Action) {
  return reducer(state, action);
}
