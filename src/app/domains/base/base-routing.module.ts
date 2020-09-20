import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: RoleComponent,
      },
      {
        path: 'login2',
        component: AuthComponent,
      },
      {
        path: '',
        component: BaseComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'roles',
            component: RoleComponent,
          },
          {
            path: 'users',
            component: RoleComponent,
          },
        ]
      }
    ]
  },
  {
    path: 'roles2',
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
