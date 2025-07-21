import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials.routing.module';
import { Testimonials } from './depoimentos/testimonials';


@NgModule({
  declarations: [
    TestimonialsPage,
    Testimonials
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
