import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { UiKitModule } from './ui-kit/ui-kit.module';

const SHARED_MODULES = [
  PipesModule,
  ComponentsModule,
  UiKitModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class SharedModule {
}
