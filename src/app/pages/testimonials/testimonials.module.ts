import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TestimonialsPage
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class TestimonialsModule { }
