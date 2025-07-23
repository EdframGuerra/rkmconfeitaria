import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { SharedModule } from '../../shared/shared.module';
import { LeaveTestimonialForm } from './leave.testimonial.form/leave.testimonial.form';

const routes: Routes = [
  {
    path: '', // Rota base para /depoimentos
    component: TestimonialsPage
  },
  {
    path: 'deixar',
    component: LeaveTestimonialForm
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class TestimonialsRoutingModule { }
