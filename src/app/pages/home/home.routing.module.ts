import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { HomeLayout } from './home.layout/home.layout';
import { ContactForm } from './contact.form/contact.form';
import { Menu } from '../menu/menu';
import { TestimonialsPage } from '../testimonials/testimonials.page/testimonials.page';
import { Orders } from '../orders/orders';


const routes: Routes = [
  {
    path: '', // Rota base para /home (ex: rkm-confeitaria.com/home)
    component: HomeLayout, // <-- CORREÇÃO: HomeLayout é o componente principal para esta rota (o pai)
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redireciona /home para /home/main
      { path: 'main', component: Home }, // <-- HomeComponent agrupa as seções principais
      // Rotas para seções específicas da Home (se você quiser acessá-las diretamente via URL)
      { path: 'cardapio-promocional', component: Menu }, // Exemplo: /home/cardapio-promocional
      { path: 'fale-conosco', component: ContactForm }, // Exemplo: /home/fale-conosco
      { path: 'depoimentos-home', component: TestimonialsPage }, // Exemplo: /home/depoimentos-home

      // Rotas para páginas completas que estão fora da Home, mas linkadas do eader (serão criadas)
      { path: 'encomendas', component: Orders }, // Rota para o carrinho de compras
      { path: 'depoimentos', component: TestimonialsPage }, // Rota para a página de todos os
    ]
  }
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

export class HomeRoutingModule { }
