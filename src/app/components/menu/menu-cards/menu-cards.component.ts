import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-cards',
  standalone: true,
  imports: [],
  templateUrl: './menu-cards.component.html',
  styleUrl: './menu-cards.component.scss'
})
export class CoffeeCardsComponent {
  @Input() cardValue: any;
}
