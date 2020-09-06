import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles: any;

  constructor(
    private baseServ: BaseService,
  ) { }

  ngOnInit(): void {
    this.baseServ.getRoles().subscribe(
      res => {
        console.log(res);
        this.roles = res.data;
      },
      err => {
        console.warn(err);
      }
    );
  }

}
