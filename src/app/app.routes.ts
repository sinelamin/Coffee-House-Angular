import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home",
  },
  {
    path: "menu",
    component: MenuPageComponent,
    title: "Menu",
  }
];
