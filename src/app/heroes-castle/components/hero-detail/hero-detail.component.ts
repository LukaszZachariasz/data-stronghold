import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';
import { HeroesCastleStateService } from '../../store/services/heroes-castle-state.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  heroData$: Observable<Hero | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesCastleStateService: HeroesCastleStateService,
  ) {
    this.heroData$ = this.activatedRoute.params.pipe(
      map(({heroId}) => Number.parseInt(heroId, 10)),
      switchMap((heroId: number) => this.heroesCastleStateService.selectPagedHeroById(heroId))
    );
  }
}
