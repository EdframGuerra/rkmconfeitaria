import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayout } from './home.layout/home.layout';
import { ContactForm } from './contact.form/contact.form';
import { Home } from './home/home';
import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { Carousel } from './carousel/carousel';


@NgModule({
  declarations: [
    Home,
    HomeLayout,
    ContactForm,
    Carousel
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule,
    Carousel
  ]
})
export class HomeModule { }
