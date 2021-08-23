import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { AngularMaterialUiKit } from './ui-kit/angular-material-ui-kit.module';

const SHARED_MODULES = [
  PipesModule,
  ComponentsModule,
  AngularMaterialUiKit
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
