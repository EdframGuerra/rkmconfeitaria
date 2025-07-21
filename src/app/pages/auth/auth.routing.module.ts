import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: Auth }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [ ]
})
export class AuthRoutingModule { }
