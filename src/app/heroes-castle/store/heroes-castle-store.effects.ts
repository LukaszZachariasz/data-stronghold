import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HeroService } from '../services/hero.service';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { LoadHeroes, PaginateHeroes, SaveHeroesResponse, SearchHeroes } from './heroes-castle-store.actions';
import { selectPaginationData, selectSearchData } from './heroes-castle-store.selectors';


@Injectable()
export class HeroesCastleStoreEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private store: Store
  ) {
  }

  loadAllHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoadHeroes),
        tap((action) => console.log(action)),
        switchMap(() => this.heroService.getHeroes()),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

  searchHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SearchHeroes),
        withLatestFrom(this.store.select(selectPaginationData)),
        switchMap(([{ searchParams }, pagination]) => this.heroService.getHeroes(searchParams, pagination)),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

  paginateHeroes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PaginateHeroes),
        withLatestFrom(this.store.select(selectSearchData)),
        switchMap(([{ pagination }, searchData]) => this.heroService.getHeroes(searchData, pagination)),
        map((response) => SaveHeroesResponse({ heroesResponse: response }))
      )
  );

}
