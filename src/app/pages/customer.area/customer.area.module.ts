import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerArea } from './customer.area';
import { CustomerAreaRoutingModule } from './customer.area.routing.module';

@NgModule({
  declarations: [CustomerArea],
  imports: [
    CommonModule,
    CustomerAreaRoutingModule
  ]
})
export class CustomerAreaModule {}

