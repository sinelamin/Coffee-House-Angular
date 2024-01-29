import { Component } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-page-menu',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {
}
