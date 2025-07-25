import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';
import { Auth } from './auth/auth';

const routes: Routes = [
  { path: '', component: Auth },
  { path: 'login', component: Login },
    { path: 'register', component: Register }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [],
})
export class AuthRoutingModule {}
