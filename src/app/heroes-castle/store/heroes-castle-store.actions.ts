import { createAction, props } from '@ngrx/store';
import { HeroSearchParams } from '../model/hero-search-params.interface';
import { PaginationInterface } from '../model/pagination.interface';
import { HeroDataResponse } from '../model/hero-data-response';

export const LoadHeroes = createAction(
  '[Heroes Castle] Load Heroes',
  props<{ searchParams?: HeroSearchParams, pagination?: PaginationInterface }>());

export const SaveHeroesResponse = createAction(
  '[Heroes Castle] Save Heroes',
  props<{ heroesResponse: HeroDataResponse }>());

export const SearchHeroes = createAction(
  '[Heroes Castle] Search Heroes',
  props<{ searchParams: HeroSearchParams }>());

export const PaginateHeroes = createAction(
  '[Heroes Castle] Paginate Heroes',
  props<{ pagination: PaginationInterface }>());

export const UpdateSearchPreviewParams = createAction(
  '[Heroes Castle] Save Preview Params',
  props<{ searchParamsPreview: string }>());


