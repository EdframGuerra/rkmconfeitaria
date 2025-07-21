import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button';
import { ProductCard } from './product.card/product.card';
import { IncentiveCard } from './incentive.card/incentive.card';



@NgModule({
  declarations: [
    Button,
    ProductCard,
    IncentiveCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button,
    ProductCard,
    IncentiveCard
  ]
})
export class SharedModule { }
