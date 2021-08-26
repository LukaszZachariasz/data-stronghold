import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './enum-key/keys.pipe';
import { ReplaceCharsPipe } from './replace-chars/replace-chars.pipe';
import { StrNotNullObjPropsPipe } from './stringify-not-null-obj-props/str-not-null-obj-props.pipe';

const PIPES = [
  KeysPipe,
  ReplaceCharsPipe,
  StrNotNullObjPropsPipe
];

@NgModule({
  declarations: [ ...PIPES ],
  exports: [ ...PIPES ],
  imports: [ CommonModule ],
  providers: [ ...PIPES ]
})
export class PipesModule {
}
