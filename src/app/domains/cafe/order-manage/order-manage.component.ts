import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CafeService } from '../cafe.service';
import { SharedService } from '../../../core/shared/shared.service';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent implements OnInit {
  orderForm: FormGroup;
  foods = [];
  arrFoods = [];
  summaryList = [];
  grandTotal = 0;

  constructor(
    public formBuilder: FormBuilder,
    private cafeService: CafeService,
    private sharedService: SharedService,
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
            qty: 0,
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
    const formData = this.orderForm.value;
    const data = {
      discount: formData.discount,
      customer: formData.customer,
      table: formData.table,
      phone: formData.phone,
      description: formData.description,
      foods: this.summaryList,
    };

    this.sharedService.temporaryToken().subscribe(
      res => {
        console.log(res);

        this.cafeService.saveOrder(data).subscribe(
          res2 => {
            this.summaryList = [];
            this.grandTotal = 0;
            this.orderForm.controls.discount.setValue(0);
            this.orderForm.controls.customer.setValue('');
            this.orderForm.controls.table.setValue('');
            this.orderForm.controls.phone.setValue('');
            this.orderForm.controls.description.setValue('');
            for (let i = 0; i < this.arrFoods.length; i++) {
              this.setQty(i, 0) ;
            }

            window.open(`${env.printURL}/orders/${res2.data.id}/print?temporary_token=${res.data}`, '_blank');
          },
          err2 => {
            console.warn(err2);
          });
      },
      err => {
        console.warn(err);
      });

  }


  remove(n): void {
    console.log(n);
  }

  trackByFn(index): any {
    return index;
  }

  addQty(index, count: number): any {
    const qtyObj = this.orderForm.controls.foods['controls'][index]['controls'].qty
    let qty = qtyObj.value + count;
    qty = qty < 0 ? 0 : qty;
    qtyObj.setValue(qty);

    this.generateSummaryList();
  }

  setQty(index, count: number): any {
    const qtyObj = this.orderForm.controls.foods['controls'][index]['controls'].qty
    qtyObj.setValue(count);
  }

  generateSummaryList(): void {
    console.log(this.orderForm.value.foods);

    this.summaryList = this.orderForm.value.foods.filter(food => food.qty > 0);

    this.grandTotal = this.summaryList.map(food => food.qty * food.price).reduce((a, b) => a + b);

    console.log(this.summaryList);
  }

}

