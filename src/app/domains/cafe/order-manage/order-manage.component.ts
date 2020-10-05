import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent implements OnInit {
  orderForm: FormGroup;
  foods = [];
  arrFoods = [];

  constructor(
    public formBuilder: FormBuilder,
    private cafeService: CafeService,
  ) {
    this.orderForm = this.formBuilder.group({
      customer: '',
      table: '',
      phone: '',
      discount: 0,
      description: '',
      foods: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {

    this.cafeService.getActiveFoods().subscribe(
      res => {
        this.foods = res.data.list;
        for (const el of this.foods) {
          this.arrFoods.push(this.formBuilder.group({
            name: el.name,
            price: el.price,
            qty: '',
            food_id: el.id,
          }));

          this.orderForm = this.formBuilder.group( {
            customer: '',
            table: '',
            phone: '',
            discount: 0,
            description: '',
            foods: this.formBuilder.array(
              this.arrFoods
              // [
              // this.formBuilder.group({
              //   qty: '15',
              //   food_id: 1,
              // }),
              // this.formBuilder.group({
              //   qty: '11',
              //   food_id: 2,
              // })
              // ]
            )
          });
        }

        console.log(this.arrFoods);
      },
      err => {
        console.warn(err);
      }
    );


  }


  submit(): void {
    console.log(this.orderForm);
  }

  remove(n): void {
    console.log(n);
  }

  trackByFn(index): any {
    return index;
  }

}

