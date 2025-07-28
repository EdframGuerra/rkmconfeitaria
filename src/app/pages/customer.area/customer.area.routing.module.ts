import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerArea } from './customer.area';

const routes: Routes = [
  { path: '', component: CustomerArea }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAreaRoutingModule {}

