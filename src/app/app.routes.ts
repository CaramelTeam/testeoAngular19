import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './layout/main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'home', loadChildren: () => import('./pages/home.module').then(d => d.HomeModule)
      }
    ]
  }
];
