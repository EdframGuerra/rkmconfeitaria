import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { Auth } from './auth';
import { Register } from './register/register';
import { AdminLogin } from './admin.login/admin.login';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [Auth, Register, AdminLogin, Login],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
  exports: [SharedModule],
})
export class AuthModule {}
