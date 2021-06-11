import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersMRComponent } from './components/orders-mr/orders-mr.component';
import { OrdersItemMRComponent } from './components/orders-item-mr/orders-item-mr.component';
import { OrdersDetailsMRComponent } from './components/orders-details-mr/orders-details-mr.component';
import {HttpClientModule} from "@angular/common/http";
import {MRDataService} from "./core/mr-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersMRComponent,
    OrdersItemMRComponent,
    OrdersDetailsMRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MRDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
