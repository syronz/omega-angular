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
      width: '320px',
      titleTable: 'roles',
      titleCreate: 'create_role',
      titleEdit: 'edit_role',
      pagination: true,
      defaultPageSize: 5,
      defaultOrderBy: 'bas_roles.id',
      defaultDirection: 'ASC',
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
          table: false,
          create: false,
          edit: false,
        },
        updated_at: {
          table: false,
          create: false,
          edit: false,
        },
        name: {
          title: this.dictServ.translate('name'),
          width: '115px',
          required: true,
          // value: 'kamilok',
        },
        resources: {
          title: this.dictServ.translate('resources'),
          width: '350px',
          table: true,
          // value: 'rtf5',
        },
        description: {
          title: this.dictServ.translate('description'),
          width: '220px',
        },
        action: {
          title: this.dictServ.translate('action'),
          width: '120px',
          type: 'action',
          // value: 'hello',
          default: {
            delete: 'icon',
            edit: 'icon',
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
