import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdmin } from './dashboard.admin';

const routes: Routes = [
  { path: '', component: DashboardAdmin }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule {}

