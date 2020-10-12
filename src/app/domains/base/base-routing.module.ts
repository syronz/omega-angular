import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { BaseComponent } from './base.component';
import { AuthComponent } from './auth/auth.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';

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
            component: UserComponent,
          },
          {
            path: 'activities',
            component: ActivityComponent,
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
