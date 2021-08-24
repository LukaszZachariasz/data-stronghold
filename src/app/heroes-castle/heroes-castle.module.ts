import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from '../shared/shared.module';
import { HeroesCastleRoutingModule } from './heroes-castle-routing.module';
import { StoreModule } from '@ngrx/store';
import { heroesCastleFeatureKey, heroesCastleReducer } from './store/heroes-castle-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroesCastleStoreEffects } from './store/heroes-castle-store.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServiceModule,
    SharedModule,
    HeroesCastleRoutingModule,
    StoreModule.forFeature(heroesCastleFeatureKey, heroesCastleReducer),
    EffectsModule.forRoot([HeroesCastleStoreEffects])
  ]
})
export class HeroesCastleModule {
}
