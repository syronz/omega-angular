import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [BaseComponent, AuthComponent],
  imports: [
    CommonModule,
    CoreModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
