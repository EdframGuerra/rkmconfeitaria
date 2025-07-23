import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardAdmin } from './dashboard.admin';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DashboardAdmin }
];

@NgModule({
  declarations: [
    DashboardAdmin
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardAdminRoutingModule { }
