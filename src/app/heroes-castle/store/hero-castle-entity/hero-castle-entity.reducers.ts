import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '../../model/hero.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { AddHeroes, RemoveHero } from './hero-castle-entity.actions';


export const heroesEntityFeatureKey = 'heroesEntity';

export interface HeroEntityState extends EntityState<Hero> {}

export const heroEntityAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>(
  { selectId: (hero) => hero.id }
);

export const heroEntityInitialState: HeroEntityState = heroEntityAdapter.getInitialState();

const reducer = createReducer(
  heroEntityInitialState,
  on(AddHeroes, (state, { heroes }) => heroEntityAdapter.addMany(heroes, state)),
  on(RemoveHero, (state, { id }) => heroEntityAdapter.removeOne(id, state))
);

export function heroesCastleReducer(state: HeroEntityState, action: Action) {
  return reducer(state, action);
}
