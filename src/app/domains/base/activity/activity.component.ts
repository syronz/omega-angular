import { Component, OnInit } from '@angular/core';
import { DictService } from '../../../core/services/dict/dict.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any;
  customData: any;

  constructor(
    private dictServ: DictService,
  ) { }

  ngOnInit(): void {

    this.customData = {
      width: '320px',
      titleTable: 'activities',
      pagination: true,
      defaultPageSize: 5,
      defaultOrderBy: 'bas_activities.id',
      defaultDirection: 'ASC',
      url: 'activities',
      create: false,
      fields: {
        id: {
          key: true,
          create: false,
          edit: false,
          title: this.dictServ.translate('id'),
          width: '40px',
          sort: true,
        },
        event: {
          title: this.dictServ.translate('event'),
          width: '115px',
          required: true,
        },
        username: {
          title: this.dictServ.translate('username'),
          width: '115px',
          required: true,
        },
        user_id: {
          title: this.dictServ.translate('user_id'),
          width: '115px',
          required: true,
        },
        ip: {
          title: this.dictServ.translate('ip'),
          width: '115px',
          required: true,
        },
        uri: {
          title: this.dictServ.translate('uri'),
          width: '115px',
          required: true,
        },
        before: {
          title: this.dictServ.translate('before'),
          width: '115px',
          required: true,
        },
        after: {
          title: this.dictServ.translate('after'),
          width: '115px',
          required: true,
        },
      }
    };


  } // ngOnInit

}
