import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerArea } from './customer.area';

const routes: Routes = [{ path: '', component: CustomerArea }];

@NgModule({
  declarations: [CustomerArea],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CustomerAreaRoutingModule {}
