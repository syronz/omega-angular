import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    BaseComponent,
    AuthComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
