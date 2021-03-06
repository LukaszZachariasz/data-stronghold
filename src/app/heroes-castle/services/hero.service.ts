import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hero } from '../model/hero.interface';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HeroSearchParams } from '../model/hero-search-params';
import { HeroType } from '../types/hero-type';
import { Pagination } from '../model/pagination';
import { HeroDataResponse } from '../model/hero-data-response';

@Injectable()
export class HeroService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  getHeroes(searchParams?: HeroSearchParams | null, pagination?: Pagination): Observable<HeroDataResponse> {
    let params = new HttpParams();

    if (searchParams?.firstName) {
      params = params.append('firstName_like', searchParams?.firstName);
    }
    if (searchParams?.type != null) {
      params = params.append('type_like', HeroType[searchParams?.type]);
    }
    if (searchParams?.mail) {
      params = params.append('mail_like', searchParams?.mail);
    }
    if (searchParams?.type === HeroType.WORKER) {
      if (searchParams?.contractDateFrom) {
        params = params.append('contractDate_gte', new Date(searchParams?.contractDateFrom).toISOString());
      }
      if (searchParams?.contractDateTo) {
        params = params.append('contractDate_lte', new Date(searchParams?.contractDateTo).toISOString());
      }
    }
    if (pagination) {
      params = params
        .append('_start', pagination.pageSize * pagination.pageIndex)
        .append('_end', pagination.pageSize * (pagination.pageIndex + 1))
        .append('_limit', pagination.pageSize);
    }

    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes', {
      params,
      observe: 'response'
    })
      .pipe(
        map(response => ({
          data: response.body ?? [],
          totalElements: Number.parseInt(response?.headers?.get('X-Total-Count') ?? '0', 10)
        })),
        catchError(() => of({ data: [], totalElements: 0 }))
      );
  }

  deleteHero(id: number): Observable<any> {
    return this.httpClient.delete(environment.heroApi + '/heroes/' + id);
  }

  getHero(id?: string): Observable<Hero[]> {
    let params = new HttpParams().append('_limit', 1);
    params = id ? params.append('id', id) : params;
    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes', { params }).pipe(map((result) => result));
  }
}
