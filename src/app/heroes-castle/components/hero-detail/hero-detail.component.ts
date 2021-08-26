import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';
import { HeroesCastleStateService } from '../../store/heroes-castle-state.service';
import { ParseUtil } from '../../../shared/utils/parse-util';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  heroData$: Observable<Hero | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesCastleStore: HeroesCastleStateService
  ) {
    this.heroData$ = this.activatedRoute.params.pipe(
      map(({heroId}) => ParseUtil.strToDecNumber(heroId)),
      switchMap((heroId: number) => this.heroesCastleStore.selectPagedHeroById(heroId))
    );
  }
}
