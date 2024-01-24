import { Component } from '@angular/core';
import { SliderListComponent } from '../slider-list/slider-list.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    SliderListComponent
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class SliderComponent {
}
