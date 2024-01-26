import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coffee-cards',
  standalone: true,
  imports: [],
  templateUrl: './coffee-cards.component.html',
  styleUrl: './coffee-cards.component.scss'
})
export class CoffeeCardsComponent {
  @Input() cardValue: any;
}
