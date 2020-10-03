import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { CafeComponent } from './cafe.component';
import { FoodComponent } from './food/food.component';
import { OrderManageComponent } from './order-manage/order-manage.component';

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
        path: 'orders/new',
        component: OrderManageComponent,
      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule { }
