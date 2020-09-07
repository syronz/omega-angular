import { Component, OnInit, Input } from '@angular/core';
import { CustomTableService } from './custom-table.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() customData: any;
  rows: any;
  tableCols: string[];
  headerTitles: string[];
  cols: any[] = [];

  constructor(
    private customTableServ: CustomTableService,
  ) { }

  ngOnInit(): void {
    console.log(this.customData);

    this.customTableServ.getList(this.customData.actions.list).subscribe(
      res => {
        console.log(res);
        this.rows = res.data.list;
        // const keys = this.objectKeys(this.customData.fields)

        // console.log(">>>>", keys);
        //
        [this.tableCols, this.headerTitles] = this.generateHeader(this.customData.fields);
        console.log("***", this.tableCols)
      },
      err => {
        console.warn(err);
      }
    );


  }

  objectKeys(obj): string[] {
    return Object.keys(obj);
  }

  generateHeader(obj): [string[], string[]] {
    const tableCols: string[] = [];
    const headerTitles: string[] = [];

    const keys = Object.keys(obj);
    for (const el of keys) {
      if (obj[el].view !== false) {
        headerTitles.push(obj[el].title);
        tableCols.push(el);
        obj[el].property = el;
        this.cols.push(obj[el]);
      }
    }

    return [tableCols, headerTitles];
  }

}
