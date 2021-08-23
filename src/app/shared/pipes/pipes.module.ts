import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './enum-key/keys.pipe';
import { ReplaceCharsPipe } from './replace-chars/replace-chars.pipe';

const PIPES = [
  KeysPipe,
  ReplaceCharsPipe
];

@NgModule({
  declarations: [ ...PIPES ],
  exports: [ ...PIPES ],
  imports: [ CommonModule ],
  providers: [ ...PIPES ]
})
export class PipesModule {
}
