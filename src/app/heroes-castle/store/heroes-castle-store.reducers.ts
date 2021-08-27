import { Action, createReducer, on } from '@ngrx/store';
import { HeroesReset, SaveHeroesResponse, UpdateSearchPreviewParams } from './heroes-castle-store.actions';
import { Pagination } from '../model/pagination';
import { HeroSearchParams } from '../model/hero-search-params';
import { HeroesDataPage } from '../model/heroes-data-page';

export const heroesCastleFeatureKey = 'heroesCastle';

export interface HeroesCastleState {
  pagination: Pagination;
  heroesDataPage: HeroesDataPage;
  searchParams?: HeroSearchParams;
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
  searchParamsPreview: undefined,
  searchParams: undefined
};

const reducer = createReducer(
  initialState,
  on(HeroesReset, () => initialState),
  on(SaveHeroesResponse, (state, data) => ({
    ...state,
    heroesDataPage: {
      ...state.heroesDataPage,
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
