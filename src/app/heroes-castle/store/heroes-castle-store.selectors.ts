import { heroesCastleFeatureKey, HeroesCastleState } from './heroes-castle-store.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesDataPage } from '../model/heroes-data-page';

export const selectHeroesCastleFeature = createFeatureSelector<HeroesCastleState>(heroesCastleFeatureKey);

export const selectCastleHeroesPage = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.heroesDataPage);

export const selectPaginationData = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.pagination);

export const selectSearchData = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.searchParams);

export const selectSearchParamsPreview = createSelector(selectHeroesCastleFeature,
  (state: HeroesCastleState) => state?.searchParamsPreview);

export const selectPagedHeroById = (heroId: number) => createSelector(selectCastleHeroesPage,
  (heroesPage: HeroesDataPage) => heroesPage?.heroes?.find(({ id }) => id === heroId) ?? null);
