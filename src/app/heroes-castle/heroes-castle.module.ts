import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from '../shared/shared.module';
import { HeroesCastleRoutingModule } from './heroes-castle-routing.module';
import { HeroesCastleStoreModule } from './store/hero-castle/heroes-castle-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServiceModule,
    SharedModule,
    HeroesCastleRoutingModule,
    HeroesCastleStoreModule
  ]
})
export class HeroesCastleModule {
}
