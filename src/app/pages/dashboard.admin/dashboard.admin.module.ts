import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminRoutingModule } from './dashboard.admin.routing.module'; // Importe o roteamento
import { DashboardAdmin } from './dashboard.admin';

@NgModule({
  declarations: [
    DashboardAdmin   
  ],
  imports: [
    CommonModule,   
    DashboardAdminRoutingModule
  
  ],
  exports: [
    DashboardAdmin
  ]
})
export class DashboardAdminModule { }
