import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { CafeRoutingModule } from './cafe-routing.module';
import { CafeComponent } from './cafe.component';
import { FoodComponent } from './food/food.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDailyComponent } from './order-daily/order-daily.component';


@NgModule({
  declarations: [
    CafeComponent,
    FoodComponent,
    OrderManageComponent,
    OrdersComponent,
    OrderDailyComponent,
  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
    CoreModule,
  ]
})
export class CafeModule { }
