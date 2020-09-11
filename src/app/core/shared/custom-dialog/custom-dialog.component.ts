import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ErrorTheme } from '../../../core/types/error';
import { FieldIterator } from '../../utils/field-iterator';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  formError: ErrorTheme;
  title: string;
  dialogForm: FormGroup;
  rows: any[] = [];
  rawForm: any = {};

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sharedServ: SharedService,
    private formBuilder: FormBuilder,
  ) {
    this.rows = FieldIterator(this.data.customData.fields, data.target);
    this.rawForm = this.generateForm(this.rows);
  }


  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;

    console.log(this.rawForm)
    this.dialogForm = this.formBuilder.group(this.rawForm);
  }

  generateForm(fields: any): any {
    const form = {};
    for (const el of fields) {
      switch (el.type) {
        case 'action':
          break
        case 'text': {
          form[el.property] = '';
          break;
        }
        case 'number': {
          form[el.property] = '';
          break;
        }
        case undefined: {
          form[el.property] = 'undefined type not allowed';
          break;
        }
        default:
          form[el.property] = 'not ok';
      }
    }

    return form
  }

  submit(): void {
    console.log(this.dialogForm.value);
  }

}
