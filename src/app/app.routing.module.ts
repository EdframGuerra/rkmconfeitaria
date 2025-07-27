import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/auth.admin.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'cardapio', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'encomendas', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuard] },
  { path: 'depoimentos', loadChildren: () => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard.admin/dashboard.admin.module').then(m => m.DashboardAdminModule), canActivate: [AdminGuard] },
  { path: 'admin', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'customer-area', loadChildren: () => import('./pages/customer.area/customer.area.module').then(m => m.CustomerAreaModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
