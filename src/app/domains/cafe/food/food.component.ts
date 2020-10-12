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
          width: '125x',
          initVal: 'active',
          options: { active: 'active', inactive: 'inactive' },
          required: true,
        },
        color: {
          title: this.dictServ.translate('color'),
          width: '125x',
          initVal: 'white',
          options: {
            light_coral: 'light_coral',
            light_salmon: 'light_salmon',
            orange: 'orange',
            gold: 'gold',
            pale_golden_rod: 'pale_golden_rod',
            khaki: 'khaki',
            yellow_green: 'yellow_green',
            green_yellow: 'green_yellow',
            light_green: 'light_green',
            light_cyan: 'light_cyan',
            aqua_marine: 'aqua_marine',
            powder_blue: 'powder_blue',
            sky_blue: 'sky_blue',
            medium_slate_blue: 'medium_slate_blue',
            medium_purple: 'medium_purple',
            medium_orchid: 'medium_orchid',
            thistle: 'thistle',
            plum: 'plum',
            light_pink: 'light_pink',
            wheat: 'wheat',
            peach_puff: 'peach_puff',
            lavender: 'lavender',
            gainsboro: 'gainsboro',
            white: 'white',
          },
          required: true,
        },
        description: {
          title: this.dictServ.translate('description'),
          width: '200px',
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


  }

}
