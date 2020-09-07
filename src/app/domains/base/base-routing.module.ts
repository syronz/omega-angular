import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';

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
            path: 'roles2',
            component: RoleComponent,
          },
        ]
      }
    ]
  },
  {
    path: 'roles',
    component: RoleComponent,
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
