import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './layout/main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(d => d.HomeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(d => d.LoginComponent)
      }
    ]
  }
];
