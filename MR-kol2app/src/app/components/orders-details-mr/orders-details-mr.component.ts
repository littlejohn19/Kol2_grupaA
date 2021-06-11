import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MRDataService} from "../../core/mr-data.service";

@Component({
  selector: 'app-orders-details-mr',
  templateUrl: './orders-details-mr.component.html',
  styleUrls: ['./orders-details-mr.component.scss']
})
export class OrdersDetailsMRComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private dataService: MRDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.dataService.getPost(params.id).subscribe((post) => {
        this.post = post;

      });
    });

  }

}
