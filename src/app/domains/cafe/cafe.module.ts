import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { CafeComponent } from './cafe.component';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [CafeComponent, FoodComponent],
  imports: [
    CommonModule,
    CafeRoutingModule
  ]
})
export class CafeModule { }
