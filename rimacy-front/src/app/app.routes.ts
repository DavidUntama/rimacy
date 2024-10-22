import { Routes } from '@angular/router';
import { ClienteTipoComponent } from './features/cliente-tipo/cliente-tipo.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./features/clientes/clientes.component').then(
            (m) => m.ClientesComponent
          ),
      },
      {
        path: 'clienteTipo',
        loadComponent: () =>
          import('./features/cliente-tipo/cliente-tipo.component').then(
            (m) => m.ClienteTipoComponent
          ),
      },
      {
        path: 'productos',
        loadComponent: () =>
          import('./features/productos/productos.component').then(
            (m) => m.ProductosComponent
          ),
      },
      {
        path: 'colaboradores',
        loadComponent: () =>
          import('./features/colaboradores/colaboradores.component').then(
            (m) => m.ColaboradoresComponent
          ),
      },
      {
        path: 'unidades',
        loadComponent: () =>
          import('./features/unidades/unidades.component').then(
            (m) => m.UnidadesComponent
          ),
      },
      {
        path: 'unid-prod',
        loadComponent: () =>
          import('./features/producto-unidad/producto-unidad.component').then(
            (m) => m.ProductoUnidadComponent
          )
      },
      {
        path: 'pedidos',
        loadComponent: () =>
          import('./features/pedidos/pedidos.component').then(
            (m) => m.PedidosComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
