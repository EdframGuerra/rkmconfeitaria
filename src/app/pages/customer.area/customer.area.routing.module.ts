import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: '', component: CustomerArea }
];

@NgModule({
  declarations: [
    CustomerArea
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerAreaRoutingModule { }




