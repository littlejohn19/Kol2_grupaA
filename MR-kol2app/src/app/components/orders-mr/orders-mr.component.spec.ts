import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMRComponent } from './orders-mr.component';

describe('OrdersMRComponent', () => {
  let component: OrdersMRComponent;
  let fixture: ComponentFixture<OrdersMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
