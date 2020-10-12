import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-order-monthly',
  templateUrl: './order-monthly.component.html',
  styleUrls: ['./order-monthly.component.scss']
})
export class OrderMonthlyComponent implements OnInit {
  list = [];

  constructor(
    private cafeService: CafeService,
  ) { }

  ngOnInit(): void {
    this.cafeService.monthlyOrder().subscribe(
      res => {
        this.list = res.data;
      },
      err => {
        console.warn(err);
      });
  }

}
