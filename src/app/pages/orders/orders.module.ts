import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from './orders';
import { OrdersRoutingModule } from './orders.routing.module';

@NgModule({
  declarations: [
    Orders
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
