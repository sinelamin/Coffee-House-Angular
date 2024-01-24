import { Component } from '@angular/core';
import { SliderCardComponent } from '../slider-card/slider-card.component';
import dataSlider from '../../../../assets/data/dataSlider.json';

@Component({
  selector: 'app-slider-list',
  standalone: true,
  imports: [
    SliderCardComponent
  ],
  templateUrl: './slider-list.component.html',
  styleUrl: './slider-list.component.scss'
})
export class SliderListComponent {
  dataSliderCards = dataSlider.coffee;
}
