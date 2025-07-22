import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsRoutingModule } from './testimonials.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LeaveTestimonialForm } from './leave.testimonial.form/leave.testimonial.form';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestimonialsPage,
    LeaveTestimonialForm
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    SharedModule,
    LeaveTestimonialForm,
    TestimonialsPage
  ]
})
export class TestimonialsModule { }
