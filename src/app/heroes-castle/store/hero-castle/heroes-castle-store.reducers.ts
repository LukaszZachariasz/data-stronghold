import { Action, createReducer, on } from '@ngrx/store';
import { HeroesReset, SaveHeroesResponse, UpdateSearchPreviewParams } from './heroes-castle-store.actions';
import { HeroesCastleState } from './model/heroes-castle-state';

export const heroesCastleFeatureKey = 'heroesCastle';

export const initialState: HeroesCastleState = {
  pagination: {
    pageIndex: 0,
    pageSize: 5
  },
  totalElements: 0,
  searchParamsPreview: undefined,
  searchParams: undefined
};

const reducer = createReducer(
  initialState,
  on(HeroesReset, () => initialState),
  on(SaveHeroesResponse, (state, data) => ({
    ...state,
    totalElements: data.heroesResponse.totalElements
  })),
  on(UpdateSearchPreviewParams, (state, data) => ({
    ...state,
    searchParamsPreview: data.searchParamsPreview
  }))
);

export function heroesCastleReducer(state: HeroesCastleState, action: Action) {
  return reducer(state, action);
}
