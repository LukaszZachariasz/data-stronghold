import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';
import { Store } from '@ngrx/store';
import { selectPagedHeroById } from '../../store/heroes-castle-store.selectors';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  heroData$: Observable<Hero | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.heroData$ = this.activatedRoute.params.pipe(
      map(({heroId}) => Number.parseInt(heroId, 10)),
      switchMap((heroId) => this.store.select(selectPagedHeroById(heroId)))
    );
  }
}
