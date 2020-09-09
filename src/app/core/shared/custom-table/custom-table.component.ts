import { Component, OnInit, Input } from '@angular/core';
import { CustomTableService } from './custom-table.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
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
  cols: any[] = [];
  formError: ErrorTheme;

  constructor(
    private customTableServ: CustomTableService,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(this.customData);

    this.customTableServ.getList(this.customData.url).subscribe(
      res => {
        console.log(res);
        this.rows = res.data.list;
        this.generateHeader(this.customData.fields);
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

  openAddDialog() {
    console.log(this.customData);
    const dialogRef = this.matDialog.open(CustomDialogComponent, {
      width: '300px',
      data: {
        customData: this.customData,
        title: this.customData.titleCreate,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  objectKeys(obj): string[] {
    return Object.keys(obj);
  }

  generateHeader(obj): void {
    const keys = Object.keys(obj);
    for (const el of keys) {
      if (obj[el].view !== false) {
        obj[el].property = el;
        this.cols.push(obj[el]);
      }
    }
  }

}
