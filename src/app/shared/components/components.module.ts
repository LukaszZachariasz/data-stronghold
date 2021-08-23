import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';


@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  exports: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    UiKitModule
  ]
})
export class ComponentsModule {
}
