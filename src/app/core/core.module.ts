import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { DictPipe } from './pipes/dict.pipe';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { CustomDialogComponent } from './shared/custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [
    DictPipe,
    CustomTableComponent,
    DeleteDialogComponent,
    CustomDialogComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [
    CustomTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    DictPipe,
    CustomTableComponent,
  ],
})

export class CoreModule {}
