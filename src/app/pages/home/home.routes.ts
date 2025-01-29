import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InformationComponent } from './information/information.component';

export const routesHome : Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'information', component: InformationComponent
  }
];
