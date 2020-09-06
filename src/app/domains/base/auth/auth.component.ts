import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ErrorTheme } from '../../../core/types/error';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

// type Error = {
//   message: string
// };

export class AuthComponent implements OnInit {
  authForm: FormGroup;
  errorList = {
    username: '',
    password: '',
  };

  formError: ErrorTheme;

  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  login(): void {
    console.log(this.authForm.value, this.authForm.valid);
    if (true || this.authForm.valid) {
      this.authServ.login(this.authForm.value)
        .subscribe(
          res => {
            console.log('res', res);
            this.redirectToDashboard(res);
          },
          err => {
            if ('message' in err.error.error) {
              this.formError = err.error.error;
            }

            if ('invalid_params' in err.error.error) {
              for (const el of err.error.error.invalid_params) {
                this.authForm.controls[el.field].setErrors({incorrect: true});
                this.errorList[el.field] = el.reason;
              }
            }
          }
        );
    }
  }

  redirectToDashboard(res: any): void {
    localStorage.setItem('session', JSON.stringify(res));
    localStorage.setItem('token', res.data.user_extra.token);
    localStorage.setItem('resources', res.data.resources);
    localStorage.setItem('language', res.data.language);
    this.authServ.setAcl(res.data.resources);
    this.router.navigate(['']);
  }

}
