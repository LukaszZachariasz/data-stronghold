import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { heroesCastleFeatureKey, heroesCastleReducer } from './heroes-castle-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroesCastleStoreEffects } from './heroes-castle-store.effects';
import { HeroesCastleStateService } from './heroes-castle-state.service';
import { HeroesCastleActionService } from './heroes-castle-action.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesCastleFeatureKey, heroesCastleReducer),
    EffectsModule.forRoot([HeroesCastleStoreEffects])
  ],
  providers: [
    HeroesCastleStateService,
    HeroesCastleActionService
  ]
})
export class HeroesCastleStoreModule { }
