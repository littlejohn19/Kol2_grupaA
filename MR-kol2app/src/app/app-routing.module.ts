import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersMRComponent} from "./components/orders-mr/orders-mr.component";
import {OrdersDetailsMRComponent} from "./components/orders-details-mr/orders-details-mr.component";

const routes: Routes = [
  {path: '', component: OrdersMRComponent },
  {path: 'order/:id', component: OrdersDetailsMRComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
