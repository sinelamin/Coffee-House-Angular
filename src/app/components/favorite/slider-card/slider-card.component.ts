import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.scss'
})
export class SliderCardComponent {
  @Input() cardValue: any;

  formatNumber(value: number): string  {
    return value.toFixed(2);
  }
}
