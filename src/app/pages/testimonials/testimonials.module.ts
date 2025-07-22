import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LeaveTestimonialForm } from './leave.testimonial.form/leave.testimonial.form';

@NgModule({
  declarations: [
    TestimonialsPage,
    LeaveTestimonialForm
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule,
    LeaveTestimonialForm
  ]
})
export class TestimonialsModule { }
