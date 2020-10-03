import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

export interface Routes {
  path: string;
  name: string;
  symbol: string;
  queryParams: any;
}

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {
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
  }

}
