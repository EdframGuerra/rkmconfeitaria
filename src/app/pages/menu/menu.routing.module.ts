import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Menu } from './menu';
import { MenuPage } from './menu.page/menu.page';


const routes: Routes = [
  { path: '', component: Menu }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule { }
