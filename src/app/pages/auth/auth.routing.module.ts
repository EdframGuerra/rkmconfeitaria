import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { FormsModule } from '@angular/forms';
import { AdminLogin } from './admin.login/admin.login';


const routes: Routes = [
  { path: '',
     component: Auth 
  },
  { path: '', component: AdminLogin }, // ou redireciona para login
  // { path: 'dashboard', component: AdminDashboard },
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
