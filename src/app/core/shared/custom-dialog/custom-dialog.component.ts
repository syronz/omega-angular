import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ErrorTheme } from '../../../core/types/error';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  formError: ErrorTheme;
  title: string;
  customForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sharedServ: SharedService,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
  }

}
