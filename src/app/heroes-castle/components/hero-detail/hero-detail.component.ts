import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';
import { HeroCastleEntityStateService } from '../../store/hero-castle-entity/services/hero-castle-entity-state.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  heroData$: Observable<Hero | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroCastleEntityStateService: HeroCastleEntityStateService,
  ) {
    this.heroData$ = this.activatedRoute.params.pipe(
      map(({heroId}) => Number.parseInt(heroId, 10)),
      switchMap((heroId: number) => this.heroCastleEntityStateService.selectHeroById(heroId))
    );
  }
}
