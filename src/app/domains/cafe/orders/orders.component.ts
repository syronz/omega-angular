import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { DictService } from '../../../core/services/dict/dict.service';
import { SharedService } from '../../../core/shared/shared.service';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;
  customData: any;

  constructor(
    private cafeService: CafeService,
    private dictServ: DictService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {

    this.customData = {
      width: '320px',
      titleTable: 'orders',
      titleCreate: 'create_order',
      titleEdit: 'edit_order',
      pagination: true,
      defaultPageSize: 5,
      defaultOrderBy: 'bas_orders.id',
      defaultDirection: 'ASC',
      url: 'orders',
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
          width: '200px',
          table: true,
          create: false,
          edit: false,
        },
        updated_at: {
          table: false,
          create: false,
          edit: false,
        },
        customer: {
          title: this.dictServ.translate('customer'),
          width: '125px',
          required: true,
        },
        phone: {
          title: this.dictServ.translate('phone'),
          width: '125px',
          required: true,
        },
        total: {
          title: this.dictServ.translate('total'),
          width: '80px',
          type: 'number',
          table: true,
        },
        discount: {
          title: this.dictServ.translate('discount'),
          width: '80px',
          type: 'number',
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
          },
          buttons: [
            {
              name: 'view',
              icon: 'print',
              fn: (x) => {
                console.log(x);
                this.sharedService.temporaryToken().subscribe(
                  res => {
                    console.log(x.id, res.data);
                    window.open(`${env.printURL}/orders/${x.id}/print?temporary_token=${res.data}`, '_blank');
                  },
                  err => {
                    console.warn(err);
                  });
              }
            }
          ],
        }
      }
    };


  }
}
