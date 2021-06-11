import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMRComponent } from './orders-item-mr.component';

describe('OrdersItemMRComponent', () => {
  let component: OrdersItemMRComponent;
  let fixture: ComponentFixture<OrdersItemMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemMRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
