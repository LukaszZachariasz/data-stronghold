import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { heroesCastleFeatureKey, heroesCastleReducer, } from './heroes-castle-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroesCastleStoreEffects } from './heroes-castle-store.effects';
import { HeroesCastleStateService } from './services/heroes-castle-state.service';
import { HeroesCastleActionService } from './services/heroes-castle-action.service';
import { HeroCastleStoreEntityModule } from '../hero-castle-entity/hero-castle-store-entity.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroCastleStoreEntityModule,
    StoreModule.forFeature(heroesCastleFeatureKey, heroesCastleReducer),
    EffectsModule.forFeature([HeroesCastleStoreEffects])
  ],
  providers: [
    HeroesCastleStateService,
    HeroesCastleActionService,
  ]
})
export class HeroesCastleStoreModule { }
