import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { DictService } from '../../../core/services/dict/dict.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foods: any;
  customData: any;

  constructor(
    private cafeService: CafeService,
    private dictServ: DictService,
    public matDialog: MatDialog,
  ) { }


  ngOnInit(): void {

    this.customData = {
      width: '320px',
      titleTable: 'foods',
      titleCreate: 'create_food',
      titleEdit: 'edit_food',
      pagination: true,
      defaultPageSize: 5,
      defaultOrderBy: 'bas_foods.id',
      defaultDirection: 'ASC',
      url: 'foods',
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
          width: '135px',
          required: true,
        },
        price: {
          title: this.dictServ.translate('price'),
          width: '100px',
          type: 'number',
          table: true,
        },
        status: {
          title: this.dictServ.translate('status'),
          width: '150px',
          required: true,
        },
        description: {
          title: this.dictServ.translate('description'),
          width: '300px',
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
        }
      }
    };


  }

}
