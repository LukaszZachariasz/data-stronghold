import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AngularMaterialUiKit } from '../ui-kit/angular-material-ui-kit.module';


@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  exports: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialUiKit
  ]
})
export class ComponentsModule {
}
