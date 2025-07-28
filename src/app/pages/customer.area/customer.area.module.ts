import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerArea } from './customer.area';
import { CustomerAreaRoutingModule } from './customer.area.routing.module';

@NgModule({
  declarations: [
    CustomerArea
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomerAreaRoutingModule
  ]
})
export class CustomerAreaModule { }
