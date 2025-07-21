import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsPage } from './testimonials.page/testimonials.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TestimonialsPage }
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
