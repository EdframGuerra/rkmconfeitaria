import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayout } from './home.layout/home.layout';
import { HighlightsCarousel } from './highlights.carousel/highlights.carousel';
import { ContactForm } from './contact.form/contact.form';
import { Home } from './home/home';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    Home,
    HomeLayout,
    HighlightsCarousel,
    ContactForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class HomeModule { }
