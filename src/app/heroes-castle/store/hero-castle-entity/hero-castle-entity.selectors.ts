import { createFeatureSelector, createSelector } from '@ngrx/store';
import { heroesEntityFeatureKey } from './hero-castle-entity.reducers';
import { HeroEntityState } from './model/hero-entity-state';


export const selectHeroesEntityFeature = createFeatureSelector<HeroEntityState>(heroesEntityFeatureKey);

export const selectHeroById = (id: number) => createSelector(selectHeroesEntityFeature,
  (heroEntityState: HeroEntityState) => heroEntityState.entities[id]);

export const selectCurrentlyStoredHeroes = createSelector(selectHeroesEntityFeature,
  (heroEntityState: HeroEntityState) => Object.values(heroEntityState.entities));
