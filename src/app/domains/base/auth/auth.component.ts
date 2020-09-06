import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthService,
  ) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  login(): void {
    console.log(this.authForm.value, this.authForm.valid);
    if (this.authForm.valid) {
      this.authServ.login(this.authForm.value)
        .subscribe(
          res => {
            console.log('res', res);

          },
          err => {
            console.log('err', err);
          }
        );
    }
  }

}
