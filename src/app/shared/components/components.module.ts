import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AngularMaterialUiKit } from '../ui-kit/angular-material-ui-kit.module';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';
import { LoginComponent } from './login/login.component';

const COMPONENTS = [
  ConfirmDialogComponent,
  DataNotFoundComponent,
  LoginComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    AngularMaterialUiKit
  ]
})
export class ComponentsModule {}
