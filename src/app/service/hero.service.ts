import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {

  constructor(private httpClient: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes').pipe(catchError(() => []));
  }

  // TODO: filter from backend side should be
  getHeroNames(searchText: string) {
    return this.httpClient.get<Hero[]>(environment.heroApi + '/heroes').pipe(
      catchError(() => []),
      map((heroes: Hero[]) => heroes.map((el: Hero) => el.name)),
      map((heroNames: string[]) => heroNames.filter((el) => el.toLowerCase().includes(searchText.toLowerCase()))))
  }
}
