import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../../../model/hero.interface';
import { RemoveHeroEntity, UpdateHeroesEntity } from '../hero-castle-entity.actions';

@Injectable()
export class HeroCastleEntityActionService {
  constructor(
    private readonly store: Store,
  ) {}

  updateHeroes(heroes: Hero[]) {
    this.store.dispatch(UpdateHeroesEntity({ heroes }));
  }

  removeHero(id: number) {
    this.store.dispatch(RemoveHeroEntity({ id }));
  }
}
