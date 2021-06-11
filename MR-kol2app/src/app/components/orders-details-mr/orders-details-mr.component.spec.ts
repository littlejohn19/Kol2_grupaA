import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMRComponent } from './orders-details-mr.component';

describe('OrdersDetailsMRComponent', () => {
  let component: OrdersDetailsMRComponent;
  let fixture: ComponentFixture<OrdersDetailsMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
