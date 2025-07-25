import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/auth.admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cardapio',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'encomendas',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthGuard] // ex: rota protegida para usuários autenticados
  },
  {
    path: 'depoimentos',
    loadChildren: () =>
      import('./pages/testimonials/testimonials.module').then(
        (m) => m.TestimonialsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard.admin/dashboard.admin.module').then(
        (m) => m.DashboardAdminModule
      ),
    canActivate: [AdminGuard], // só admin acessa
  },
  // Opcional: redireciona '/admin' para '/dashboard' se quiser
  {
    path: 'admin',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // Redirecionamento para /home quando o path for vazio
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // Rota coringa para páginas não encontradas
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
