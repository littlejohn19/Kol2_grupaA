import { Component, OnInit } from '@angular/core';
import {MRDataService} from "../../core/mr-data.service";

@Component({
  selector: 'app-orders-mr',
  templateUrl: './orders-mr.component.html',
  styleUrls: ['./orders-mr.component.scss']
})
export class OrdersMRComponent implements OnInit {
  posts: any = [];

  constructor(private dataService: MRDataService) { }

  ngOnInit(): void {
    this.dataService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
