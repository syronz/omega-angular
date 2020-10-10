import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-order-daily',
  templateUrl: './order-daily.component.html',
  styleUrls: ['./order-daily.component.scss']
})
export class OrderDailyComponent implements OnInit {
  dateSelector: FormGroup;
  today = new Date().toISOString().substring(0, 10);
  orders = [];
  grandTotal = 0;
  discountTotal = 0;
  netTotal = 0;

  constructor(
    public formBuilder: FormBuilder,
    private cafeService: CafeService,
  ) {
    this.dateSelector = this.formBuilder.group({
      start: this.today,
      end: this.today,
    });
  }

  ngOnInit(): void {
    this.goToDate();
  }

  goToDate(): void {

    const start = this.dateSelector.value.start;
    const end = this.dateSelector.value.end;
    this.cafeService.dailyOrder(start, end).subscribe(
      res => {
        this.orders = res.data.list;
        this.grandTotal = this.orders.map(order => order.total ).reduce((a, b) => a + b);
        this.discountTotal = this.orders.map(order => this.intval(order.discount) ).reduce((a, b) => a + b);
        this.netTotal = this.grandTotal - this.discountTotal;
      },
      err => {
        console.warn(err);
      });
  }

  intval(num: any): number {
    if (num == null) {
      return 0;
    }
    return parseInt(num, 10);
  }

}
