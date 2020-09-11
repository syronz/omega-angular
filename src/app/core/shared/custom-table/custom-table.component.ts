import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomTableService } from './custom-table.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { ErrorTheme } from '../../../core/types/error';
import { FieldIterator } from '../../utils/field-iterator';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', {static: true}) paginator;
  @Input() customData: any;
  rows: any;
  cols: any[] = [];

  length: number;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 50, 100];
  pageEvent: PageEvent;
  queryParams: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customTableServ: CustomTableService,
    public matDialog: MatDialog,
  ) {
    this.route.queryParams.subscribe(params => {
      // this.queryParams = params;
      console.log('>>>>>>>>>>>>> 2', params, this.customData);
      this.queryParams.page = params.page;
      if ('page' in params && this.paginator !== undefined) {
        this.paginator.pageIndex = params.page;
      }

      if (this.customData !== undefined) {
        this.list(params);
      }

      // this.params = params;
      // if (this.firstLoad) {
      //   this.firstLoad = false;
      // } else {
      //   this.ngOnInit();
      // }

      // this.list(params)
        // this.ngOnInit();
    });
  }

  list(params: any): void{
    this.customTableServ.getList(this.customData.url, this.queryParams).subscribe(
      res => {
        console.log(res);
        this.rows = res.data.list;
        this.length = res.data.count;

        this.cols = FieldIterator(this.customData.fields, 'table');
      },
      err => {
        console.warn(err);
      }
    );
  }

  ngOnInit(): void {
    console.log('>>>>>>>>>>>>>>>', this.queryParams, this.customData);
    this.queryParams.page_size = this.customData.defaultPageSize;
    this.list(this.queryParams);
  }

  ngAfterViewInit(): void {
    console.log('>>>>>>>>>>>>>>> 6', this.queryParams);
    if ('page' in this.queryParams) {
      this.paginator.pageIndex = this.queryParams.page;
    }

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

  openAddDialog(): void {
    console.log(this.customData);
    const dialogRef = this.matDialog.open(CustomDialogComponent, {
      width: this.customData.width,
      data: {
        customData: this.customData,
        title: this.customData.titleCreate,
        target: 'create',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  objectKeys(obj): string[] {
    return Object.keys(obj);
  }

  changePage(event?: PageEvent): any {
    this.queryParams.page_size = event.pageSize;
    this.queryParams.page = event.pageIndex;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge',
    });
    return event;
  }


}
