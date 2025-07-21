import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPage } from './menu.page/menu.page';
import { MenuRoutingModule } from './menu.routing.module';


@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
