import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'tabs-nina',
    loadComponent: () =>
      import('./pages/tabs-nina/tabs-nina.page').then((m) => m.TabsNinaPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/tabs-nina/home/home.page').then((m) => m.NinaHomePage),
      },
      {
        path: 'tracker',
        loadComponent: () =>
          import('./pages/tabs-nina/tracker/tracker.page').then((m) => m.NinaTrackerPage),
      },
      {
        path: 'learn',
        loadComponent: () =>
          import('./pages/tabs-nina/learn/learn.page').then((m) => m.NinaLearnPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/tabs-nina/profile/profile.page').then((m) => m.NinaProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'tabs-cuidador',
    loadComponent: () =>
      import('./pages/tabs-cuidador/tabs-cuidador.page').then((m) => m.TabsCuidadorPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/tabs-cuidador/dashboard/dashboard.page').then((m) => m.CuidadorDashboardPage),
      },
      {
        path: 'tips',
        loadComponent: () =>
          import('./pages/tabs-cuidador/tips/tips.page').then((m) => m.CuidadorTipsPage),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  // Rutas antiguas mantenidas por compatibilidad
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
