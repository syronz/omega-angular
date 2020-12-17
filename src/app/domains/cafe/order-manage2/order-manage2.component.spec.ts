import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManage2Component } from './order-manage2.component';

describe('OrderManage2Component', () => {
  let component: OrderManage2Component;
  let fixture: ComponentFixture<OrderManage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderManage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
