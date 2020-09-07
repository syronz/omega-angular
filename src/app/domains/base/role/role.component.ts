import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { DictService } from '../../../core/services/dict/dict.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles: any;
  customData: any;

  constructor(
    private baseServ: BaseService,
    private dictServ: DictService,
  ) { }

  ngOnInit(): void {

    this.customData = {
      title: this.dictServ.translate('roles'),
      pagination: true,
      pageSize: 10,
      defaultSorting: 'bas_roles.id ASC',
      actions: {
        list: 'roles',
        create: true,
        update: true,
        delete: false,
      },
      fields: {
        id: {
          key: true,
          create: false,
          edit: false,
          title: this.dictServ.translate('id'),
          width: '40px',
          sort: true,
        },
        created_at: {
          title: this.dictServ.translate('created_at'),
          view: false,
          create: false,
          edit: false,
        },
        name: {
          title: this.dictServ.translate('name'),
          width: '115px',
        },
        resources: {
          title: this.dictServ.translate('resources'),
          width: '350px',
          view: true,
        },
        description: {
          title: this.dictServ.translate('description'),
          width: '220px',
        },
      }
    };

  } // ngOnInit

}
