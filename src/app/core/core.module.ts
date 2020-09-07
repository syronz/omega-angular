import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { DictPipe } from './pipes/dict.pipe';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';

@NgModule({
  declarations: [
    DictPipe,
    CustomTableComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [
    CustomTableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MaterialModule,
    DictPipe,
    CustomTableComponent,
  ],
})

export class CoreModule {}
