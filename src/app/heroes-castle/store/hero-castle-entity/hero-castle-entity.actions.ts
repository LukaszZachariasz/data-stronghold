import { createAction, props } from '@ngrx/store';
import { Hero } from '../../model/hero.interface';

export const UpdateHeroesEntity = createAction(
  '[Heroes Castle] [Entity] Add Heroes',
  props<{ heroes: Hero[] }>()
);

export const RemoveHeroEntity = createAction(
  '[Heroes Castle] [Entity] Remove Hero',
  props<{ id: number }>()
);

