import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor(
    private baseServ: BaseService,
  ) { }

  ngOnInit(): void {
    this.baseServ.getRoles().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.warn(err);
      }
    );
  }

}
