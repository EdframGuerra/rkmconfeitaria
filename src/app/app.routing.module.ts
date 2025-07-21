import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: 'cardapio', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'encomendas', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
  },
  { path: 'depoimentos', loadChildren: () => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
