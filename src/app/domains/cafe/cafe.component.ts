import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

export interface Routes {
  path: string;
  name: string;
  symbol: string;
  queryParams: any;
}

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor(
    public authService: AuthService,
) { }

  ngOnInit(): void {
  }

}
