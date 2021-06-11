import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MRDataService {
  private apiURL = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.apiURL}/api/order/items`)
  }

  getPost(id: number) {
    return this.http.get(`${this.apiURL}/api/order/items/${id}`)
  }
}
