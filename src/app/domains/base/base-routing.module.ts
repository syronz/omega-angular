import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent,
      },
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'auth',
            component: AuthComponent,
          },
        ]
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
