import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

export interface Routes {
  path: string;
  name: string;
  symbol: string;
  queryParams: any;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  routes = [];

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {

    if (this.authService.checkPerm('role:read')) {
      this.routes.push({
        path: '/base/roles',
        name: 'Role',
        symbol: 'perm_data_setting',
      });
    }

    if (this.authService.checkPerm('user:read')) {
      this.routes.push({
        path: '/base/users',
        name: 'User',
        symbol: 'supervisor_account',
      });
    }

    if (this.authService.checkPerm('activity:all')) {
      this.routes.push({
        path: '/base/activities',
        name: 'Activity',
        symbol: 'supervisor_account',
      });
    }

  } // ngOnInit

}
