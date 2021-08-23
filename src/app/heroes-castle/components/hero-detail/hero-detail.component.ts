import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  heroData$: Observable<Hero>;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) {
    this.heroData$ = this.activatedRoute.params.pipe(
      filter((params: Params) => !!params.heroId),
      switchMap(({ heroId }) => this.heroService.getHero(heroId))
    );
  }
}
