import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminRoutingModule } from './dashboard.admin.routing.module'; // Importe o roteamento
import { DashboardAdmin } from './dashboard.admin';

@NgModule({
  declarations: [
    DashboardAdmin // <-- DECLARAR O COMPONENTE APENAS AQUI
  ],
  imports: [
    CommonModule,
    // Remover RouterModule daqui se DashboardAdminRoutingModule já o importar e exportar
    // RouterModule,
    DashboardAdminRoutingModule // Adicionar o módulo de roteamento
  ],
  exports: [
    DashboardAdmin // <-- Exporte o componente
  ]
})
export class DashboardAdminModule { }
