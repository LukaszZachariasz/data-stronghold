import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';

const SHARED_MODULES = [
  PipesModule
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
