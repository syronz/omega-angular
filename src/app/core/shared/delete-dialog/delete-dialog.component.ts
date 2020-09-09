import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { ErrorTheme } from '../../../core/types/error';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  formError: ErrorTheme;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sharedServ: SharedService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close({result: this.data});
  }

  delete(): void {
    console.log("......>>>>", this.data);

    this.sharedServ.delete(`${this.data.url}/${this.data.row.id}`).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.warn(err);
        this.formError = err.error.error;
      }
    );
  }

}
