import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { DictService } from '../../../core/services/dict/dict.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  customData: any;

  constructor(
    private baseServ: BaseService,
    private dictServ: DictService,
  ) { }

  ngOnInit(): void {

    this.customData = {
      width: '320px',
      titleTable: 'users',
      titleCreate: 'create_user',
      titleEdit: 'edit_user',
      pagination: true,
      defaultPageSize: 5,
      defaultOrderBy: 'bas_users.id',
      defaultDirection: 'ASC',
      url: 'users',
      create: true,
      fields: {
        id: {
          key: true,
          create: false,
          edit: false,
          title: this.dictServ.translate('id'),
          width: '40px',
          sort: true,
        },
        username: {
          title: this.dictServ.translate('username'),
          width: '115px',
          required: true,
        },
        password: {
          title: this.dictServ.translate('password'),
          width: '115px',
          required: true,
          table: false,
        },
        role: {
          title: this.dictServ.translate('role'),
          width: '100px',
          table: true,
          create: false,
          edit: false,
        },
        role_id: {
          title: this.dictServ.translate('role_id'),
          type: 'number',
          table: false,
          create: true,
          edit: true,
        },
        lang: {
          title: this.dictServ.translate('language'),
          width: '50px',
          initVal: 'ku',
          options: { ku: 'ku', en: 'en' },
        },
        action: {
          title: this.dictServ.translate('action'),
          width: '120px',
          type: 'action',
          default: {
            delete: 'icon',
            edit: 'icon',
          },
        }
      }
    };


  } // ngOnInit

}
