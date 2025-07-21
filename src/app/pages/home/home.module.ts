import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayout } from './home.layout/home.layout';
import { HighlightsCarousel } from './highlights.carousel/highlights.carousel';
import { MenuSection } from './menu.section/menu.section';
import { ContactForm } from './contact.form/contact.form';
import { TestimonialsSection } from './testimonials.section/testimonials.section';
import { Home } from './home/home';

import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Home,
    HomeLayout,
    HighlightsCarousel,
    MenuSection,
    ContactForm,
    TestimonialsSection
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
