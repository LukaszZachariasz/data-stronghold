import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from '../shared/shared.module';
import { HeroesCastleRoutingModule } from './heroes-castle-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServiceModule,
    SharedModule,
    HeroesCastleRoutingModule
  ]
})
export class HeroesCastleModule {
}
