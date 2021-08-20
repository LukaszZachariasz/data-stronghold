import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hero } from '../model/hero.interface';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { HeroSearchParams } from '../model/hero-search-params.interface';
import { HeroType } from '../types/hero-type';
import { PaginationInterface } from '../model/pagination.interface';

@Injectable()
export class HeroService {

  constructor(private httpClient: HttpClient) {
  }

  getHeroNames(searchText: string): Observable<string[]> {
    const params = new HttpParams()
      .append('firstName_like', searchText);

    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes', { params }).pipe(
      catchError(() => []),
      tap(ee => {debugger;}),
      map((heroes: Hero[]) => heroes.map((el: Hero) => el.firstName)),
      map((heroNames: string[]) => heroNames.filter((el) => el.toLowerCase().includes(searchText.toLowerCase()))));
  }

  getHeroes(pagination?: PaginationInterface, searchParams?: HeroSearchParams): Observable<any> {

    let params = new HttpParams();

    debugger;
    if (searchParams) {
      params = params
        .append('firstName_like', searchParams?.firstName)
        .append('type_like', HeroType[searchParams?.type])
        .append('mail_like', searchParams?.mail)
        .append('contractDate_gle', new Date(searchParams?.contractDateFrom)?.toLocaleDateString('EN').split('/').join('-'))
        .append('contractDate_glt', new Date(searchParams?.contractDateTo)?.toLocaleDateString('EN').split('/').join('-'));
    }

    if (pagination) {
      params = params
        .append('_start', pagination.pageSize * pagination.pageIndex)
        .append('_end', pagination.pageSize * (pagination.pageIndex + 1))
        .append('_limit', pagination.pageSize);
    }

    debugger;
    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes', { params, observe: 'response' })
      .pipe(
        map(response => ({ data: response.body, totalElements: response.headers.get('X-Total-Count') })),
        catchError(() => of({ data: [], totalElements: 0 }))
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(environment.heroApi + '/heroes/' + id);
  }
}
