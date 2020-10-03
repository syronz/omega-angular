import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { CafeRoutingModule } from './cafe-routing.module';
import { CafeComponent } from './cafe.component';
import { FoodComponent } from './food/food.component';
import { OrderManageComponent } from './order-manage/order-manage.component';


@NgModule({
  declarations: [
    CafeComponent,
    FoodComponent,
    OrderManageComponent,
  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
    CoreModule,
  ]
})
export class CafeModule { }
