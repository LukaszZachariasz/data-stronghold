import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { heroesEntityFeatureKey, heroesEntityReducer } from './hero-castle-entity.reducers';
import { HeroCastleEntityStateService } from './services/hero-castle-entity-state.service';
import { HeroCastleEntityActionService } from './services/hero-castle-entity-action.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesEntityFeatureKey, heroesEntityReducer),
  ],
  providers: [
    HeroCastleEntityStateService,
    HeroCastleEntityActionService
  ]
})
export class HeroCastleStoreEntityModule { }
