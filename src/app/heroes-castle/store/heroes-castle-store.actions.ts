import { createAction, props } from '@ngrx/store';
import { HeroSearchParams } from '../model/hero-search-params';
import { Pagination } from '../model/pagination';
import { HeroDataResponse } from '../model/hero-data-response';

export const LoadHeroes = createAction(
  '[Heroes Castle] Load Heroes');

export const HeroesReset = createAction(
  '[Heroes Castle] Reset');

export const SaveHeroesResponse = createAction(
  '[Heroes Castle] Save Heroes',
  props<{ heroesResponse: HeroDataResponse }>());

export const SearchHeroes = createAction(
  '[Heroes Castle] Search Heroes',
  props<{ searchParams: HeroSearchParams }>());

export const PaginateHeroes = createAction(
  '[Heroes Castle] Paginate Heroes',
  props<{ pagination: Pagination }>());

export const UpdateSearchPreviewParams = createAction(
  '[Heroes Castle] Update Preview Params',
  props<{ searchParamsPreview: HeroSearchParams }>());

export const RemoveHero = createAction(
  '[Heroes Castle] Remove Hero',
  props<{ id: number }>());
