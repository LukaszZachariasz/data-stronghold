import { heroesCastleFeatureKey } from './heroes-castle-store.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesCastleState } from './model/heroes-castle-state';

export const selectHeroesCastleFeature = createFeatureSelector<HeroesCastleState>(heroesCastleFeatureKey);

export const selectHeroesTotalCount = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.totalElements);

export const selectPaginationData = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.pagination);

export const selectSearchData = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.searchParams);

export const selectSearchParamsPreview = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.searchParamsPreview);
