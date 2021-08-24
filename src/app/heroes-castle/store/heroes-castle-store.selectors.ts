import { heroesCastleFeatureKey, HeroesCastleState } from './heroes-castle-store.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesDataPage } from '../model/heroes-data-page';

export const selectFeature = createFeatureSelector<HeroesCastleState>(heroesCastleFeatureKey);

export const selectCastleHeroesPage = createSelector(selectFeature, (state: HeroesCastleState) => state?.heroesDataPage);

export const selectPaginationData = createSelector(selectFeature, (state: HeroesCastleState) => state?.pagination);
export const selectSearchData = createSelector(selectFeature, (state: HeroesCastleState) => state?.searchParams);

export const selectSearchParamsPreview = createSelector(selectFeature, (state: HeroesCastleState) => state?.searchParamsPreview);

export const selectPagedHeroById = (heroId: number) => createSelector(selectCastleHeroesPage,
  (heroesPage: HeroesDataPage) => heroesPage?.heroes?.find(({id}) => id === heroId) ?? null);

