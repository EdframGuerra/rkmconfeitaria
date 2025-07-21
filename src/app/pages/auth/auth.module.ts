import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { Auth } from './auth';
import { Register } from './register/register';
import { AdminLogin } from './admin.login/admin.login';

@NgModule({
  declarations: [
     Auth,
    Register,
    AdminLogin
  ],
  imports: [
    CommonModule,
     AuthRoutingModule
  ]
})
export class AuthModule { }
