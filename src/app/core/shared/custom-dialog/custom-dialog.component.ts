import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ErrorTheme } from '../../../core/types/error';
import { FieldIterator } from '../../utils/field-iterator';
import { FindPrimaryKey } from '../../utils/find-primary-key';

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
  errorList: any = {};
  dialogType: string;

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sharedServ: SharedService,
    private formBuilder: FormBuilder,
  ) {
    const target = this.data.target === 'create' ? 'create' : '';
    this.rows = FieldIterator(this.data.customData.fields, target);
    this.rawForm = this.generateForm(this.rows);
  }


  ngOnInit(): void {
    this.title = this.data.title;
    this.dialogType = this.data.target;

    this.dialogForm = this.formBuilder.group(this.rawForm);
  }

  generateForm(fields: any): any {
    const form = {};
    for (const el of fields) {
      console.log(">>>>>>>>>>>>$$", el)
      const preValue = el.required === true ?  [el.tmpValue, Validators.required] : [el.tmpValue];
      switch (el.type) {
        case 'action':
          break;
        case 'text': {
          form[el.property] = preValue;
          break;
        }
        case 'number': {
          form[el.property] = preValue;
          break;
        }
        case 'select': {
          el.select_list = [];
          for (const [a, b] of Object.entries(el.options)) {
            const obj = { val: a, cap: b };
            el.select_list.push(obj);
          }
          form[el.property] = preValue;
          break;
        }
        case undefined: {
          form[el.property] = 'undefined type not allowed';
          break;
        }
        default:
          form[el.property] = preValue;
      }
    }

    return form;
  }

  submit(): void {
    switch (this.data.target) {
      case 'create': {
        this.sharedServ.create(`${this.data.customData.url}`, this.dialogForm.value).subscribe(
          res => {
            this.dialogRef.close({refresh: true});
          },
          err => {
            console.warn(err);
            if ('invalid_params' in err.error.error) {
              for (const el of err.error.error.invalid_params) {
                this.dialogForm.controls[el.field].setErrors({incorrect: true});
                this.errorList[el.field] = el.reason;
              }
              return;
            }

            this.formError = err.error.error;
          }
        );
        break;
      }
      case 'edit':
        const primaryKey = FindPrimaryKey(this.data.customData.fields);
        this.sharedServ.update(`${this.data.customData.url}/${this.dialogForm.value[primaryKey]}`, this.dialogForm.value).subscribe(
          res => {
            this.dialogRef.close({refresh: true});
          },
          err => {
            console.warn(err);
            if ('invalid_params' in err.error.error) {
              for (const el of err.error.error.invalid_params) {
                this.dialogForm.controls[el.field].setErrors({incorrect: true});
                this.errorList[el.field] = el.reason;
              }
              return;
            }

            this.formError = err.error.error;
          }
        );
        break;
    }
  }

  close(): void {
    this.dialogRef.close({result: this.data});
  }

}
