import { Action, createReducer, on } from '@ngrx/store';
import { RemoveHeroEntity, UpdateHeroesEntity } from './hero-castle-entity.actions';
import { HeroEntityState } from './model/hero-entity-state';
import { heroEntityAdapter } from './hero-castle-entity.adapters';


export const heroesEntityFeatureKey = 'heroesEntity';

export const heroEntityInitialState: HeroEntityState = heroEntityAdapter.getInitialState();

const reducer = createReducer(
  heroEntityInitialState,
  on(UpdateHeroesEntity, (state, { heroes }) => heroEntityAdapter.setAll(heroes, state)),
  on(RemoveHeroEntity, (state, { id }) => heroEntityAdapter.removeOne(id, state))
);

export function heroesEntityReducer(state: HeroEntityState, action: Action) {
  return reducer(state, action);
}
