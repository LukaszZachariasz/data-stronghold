import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeroService } from '../services/hero.service';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  HeroesReset,
  LoadHeroes,
  PaginateHeroes,
  RemoveHero,
  SaveHeroesResponse,
  SearchHeroes
} from './heroes-castle-store.actions';
import { HeroesCastleStateService } from './heroes-castle-state.service';


@Injectable()
export class HeroesCastleStoreEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private heroesCastleStateService: HeroesCastleStateService,
  ) {}

  loadAllHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoadHeroes),
        withLatestFrom(this.heroesCastleStateService.selectSearchData(), this.heroesCastleStateService.selectPaginationData()),
        switchMap(([, searchData, paginationData]) => this.heroService.getHeroes(searchData, paginationData)),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

  searchHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SearchHeroes),
        withLatestFrom(this.heroesCastleStateService.selectPaginationData()),
        switchMap(([{ searchParams }, pagination]) => this.heroService.getHeroes(searchParams, pagination)),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

  paginateHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PaginateHeroes),
        withLatestFrom(this.heroesCastleStateService.selectSearchData()),
        switchMap(([{ pagination }, searchData]) => this.heroService.getHeroes(searchData, pagination)),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

  heroesReset$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesReset),
        map(LoadHeroes)
      )
  );

  heroRemove$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RemoveHero),
        switchMap((action) => this.heroService.deleteHero(action.id)),
        map(LoadHeroes)
      )
  );

}
