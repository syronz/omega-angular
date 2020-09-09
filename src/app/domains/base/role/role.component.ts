import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { DictService } from '../../../core/services/dict/dict.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../core/shared/delete-dialog/delete-dialog.component';

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
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.customData = {
      titleTable: 'roles',
      titleCreate: 'create_role',
      titleEdit: 'edit_role',
      pagination: true,
      pageSize: 10,
      defaultSorting: 'bas_roles.id ASC',
      url: 'roles',
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
        action: {
          title: this.dictServ.translate('action'),
          width: '100px',
          type: 'action',
          // value: 'hello',
          default: {
            delete: true,
            update: true,
          },
          buttons: [
            {
              name: 'delete',
              icon: 'delete',
              fn: (x) => {
                const dialogRef = this.matDialog.open(DeleteDialogComponent, {
                  width: '300px',
                  data: {
                    name: 'diako',
                  },
                });
                dialogRef.afterClosed().subscribe(result => {
                  console.log(result);
                });
              }
            },
          ]
        }
      }
    };

  } // ngOnInit

}
