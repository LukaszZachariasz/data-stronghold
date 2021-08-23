import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailAsyncValidator } from './email-async-validator.directive';


@NgModule({
  declarations: [
    EmailAsyncValidator
  ],
  exports: [
    EmailAsyncValidator
  ],
  imports: [
    CommonModule
  ],
  providers: [
    EmailAsyncValidator
  ]
})
export class DirectivesModule {
}
