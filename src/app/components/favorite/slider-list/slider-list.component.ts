import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
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

export class SliderListComponent implements OnChanges {
  dataSliderCards = dataSlider.coffee;

  @Input() anyValue: any;

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      // console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      // console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      // console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }

    // console.log('anyValue changed:', this.anyValue);
  }
}
