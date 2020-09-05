import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { DictPipe } from './pipes/dict.pipe';

@NgModule({
  declarations: [
    DictPipe,
  ],
  exports: [
    MaterialModule,
    DictPipe,
  ],
})

export class CoreModule {}
