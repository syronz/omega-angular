import { Component, OnInit, Input } from '@angular/core';
import { CustomTableService } from './custom-table.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorTheme } from '../../../core/types/error';

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
  formError: ErrorTheme;

  constructor(
    private customTableServ: CustomTableService,
    public matDialog: MatDialog,
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
      },
      err => {
        console.warn(err);
      }
    );


  }

  openDeleteDialog(row: any, customData: any): void {
    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        row,
        url: customData.url,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
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
