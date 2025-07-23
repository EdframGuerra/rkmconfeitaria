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
import { HorarioFuncionamento } from './horario.funcionamento/horario.funcionamento';
import { NossosContatos } from './nossos.contatos/nossos.contatos';


@NgModule({
  declarations: [
    Home,
    HomeLayout,
    ContactForm,
    Carousel,
    HorarioFuncionamento,
    NossosContatos
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule,
    Carousel,
    HorarioFuncionamento,
    NossosContatos
  ]
})
export class HomeModule { }
