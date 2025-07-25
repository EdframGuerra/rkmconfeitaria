import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { Register } from './register/register';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [Register, Login],
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
