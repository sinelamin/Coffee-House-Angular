import { Component } from '@angular/core';
import dataMenu from './../../../assets/data/dataMenu.json'

import { CoffeeCardsComponent } from './coffee-cards/coffee-cards.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CoffeeCardsComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dataMenuCards = dataMenu.coffee;
}
