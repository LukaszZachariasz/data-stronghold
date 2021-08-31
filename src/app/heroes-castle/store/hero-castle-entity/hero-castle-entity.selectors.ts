import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroEntityState, heroesEntityFeatureKey } from './hero-castle-entity.reducers';

export const selectHeroesEntityFeature = createFeatureSelector<HeroEntityState>(heroesEntityFeatureKey);

export const selectHeroById = (id: number) => createSelector(selectHeroesEntityFeature,
  (heroEntityState: HeroEntityState) => heroEntityState.entities[id]);
