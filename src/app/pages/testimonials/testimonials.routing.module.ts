import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Testimonials } from './depoimentos/testimonials';

const routes: Routes = [
  { path: '', component: Testimonials }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TestimonialsRoutingModule { }
