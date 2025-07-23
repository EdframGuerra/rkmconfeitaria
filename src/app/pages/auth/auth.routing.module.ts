import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Auth } from './auth';
import { FormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';

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
