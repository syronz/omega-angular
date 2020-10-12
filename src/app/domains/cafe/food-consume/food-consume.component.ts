import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-food-consume',
  templateUrl: './food-consume.component.html',
  styleUrls: ['./food-consume.component.scss']
})
export class FoodConsumeComponent implements OnInit {
  dateSelector: FormGroup;
  today = new Date().toISOString().substring(0, 10);
  foods = [];
  totalQty = 0;

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
    this.cafeService.foodConsume(start, end).subscribe(
      res => {
        this.foods = res.data;
        console.log('................', res);
        this.totalQty = this.foods.map(food => food.qty ).reduce((a, b) => a + b);
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
