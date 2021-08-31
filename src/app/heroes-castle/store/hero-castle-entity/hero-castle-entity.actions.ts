import { createAction, props } from '@ngrx/store';
import { Hero } from '../../model/hero.interface';

export const AddHeroes = createAction(
  '[Heroes Castle] [Entity] Add Heroes',
  props<{ heroes: Hero[] }>()
);

export const RemoveHero = createAction(
  '[Heroes Castle] [Entity] Remove Hero',
  props<{ id: number }>()
);

