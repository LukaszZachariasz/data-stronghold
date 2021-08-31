import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentlyStoredHeroes, selectHeroById } from '../hero-castle-entity.selectors';

@Injectable()
export class HeroCastleEntityStateService {
  constructor(
    private readonly store: Store,
  ) {}

  selectHeroById = (id: number) => this.store.select(selectHeroById(id));

  selectCurrentlyStoredHeroes = () => this.store.select(selectCurrentlyStoredHeroes);
}
