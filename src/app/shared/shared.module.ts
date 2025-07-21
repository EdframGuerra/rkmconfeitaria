import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button';
import { ProductCard } from './product.card/product.card';
import { IncentiveCard } from './incentive.card/incentive.card';
import { TestimonialsCard } from './testimonials.card/testimonials.card';



@NgModule({
  declarations: [
    Button,
    ProductCard,
    IncentiveCard,
    TestimonialsCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button,
    ProductCard,
    IncentiveCard,
    TestimonialsCard
  ]
})
export class SharedModule { }
