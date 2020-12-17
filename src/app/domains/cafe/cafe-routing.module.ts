import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { CafeComponent } from './cafe.component';
import { FoodComponent } from './food/food.component';
import { OrderManageComponent } from './order-manage/order-manage.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDailyComponent } from './order-daily/order-daily.component';
import { OrderMonthlyComponent } from './order-monthly/order-monthly.component';
import { FoodConsumeComponent } from './food-consume/food-consume.component';
import { OrderManage2Component } from './order-manage2/order-manage2.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'foods',
        component: FoodComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'report/daily-order',
        component: OrderDailyComponent,
      },
      {
        path: 'report/monthly-order',
        component: OrderMonthlyComponent,
      },
      {
        path: 'report/food-consume',
        component: FoodConsumeComponent,
      },

    ]
  },
  {
    path: 'orders/new2',
    component: OrderManageComponent,
  },
  {
    path: 'orders/new',
    component: OrderManage2Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule { }
