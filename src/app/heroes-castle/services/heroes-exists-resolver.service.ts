import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroService } from './hero.service';
import { catchError, map } from 'rxjs/operators';
import { Hero } from '../model/hero.interface';

@Injectable()
export class HeroesExistsResolver implements Resolve<boolean> {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.heroService.getHero()
      .pipe(
        map((heroes: Hero[]) => {
          if (heroes.length) {
            return true;
          }
          this.router.navigate(['/no-data']);
          return false;
        }),
        catchError(() => {
          this.router.navigate(['/no-data']);
          return of(false);
        })
      );
  }
}
