import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-mr',
  templateUrl: './orders-item-mr.component.html',
  styleUrls: ['./orders-item-mr.component.scss']
})
export class OrdersItemMRComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
