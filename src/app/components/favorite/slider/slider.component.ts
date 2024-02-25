import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { SliderListComponent } from '../slider-list/slider-list.component';
import dataSlider from '../../../../assets/data/dataSlider.json';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    SliderListComponent
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class SliderComponent implements AfterViewInit {

  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;

  @ViewChildren('progress') progressBars!: QueryList<ElementRef>;

  startPoint = 0;
  numberOfCards = dataSlider.coffee.length;
  position = this.startPoint;
  offset: number = 0;
  maxRightPosition: number = 0;

  progress = 0;
  index = 0;
  arrProgressBars: ElementRef[] = [];

  ngAfterViewInit() {
    this.arrProgressBars = this.progressBars.toArray();
    this.offset = this.sliderWrapper.nativeElement.clientWidth;
    this.maxRightPosition = this.offset * (this.numberOfCards - 1);
    this.growthOfProgress();
  }


  moveRight() {
    this.progress = 0;

    if (this.position === -this.maxRightPosition) {
      this.position = 0;
      this.getProgressBarWidth();
      this.index = 0;
    } else {
      this.position -= this.offset;
      this.getProgressBarWidth();
      this.index += 1;
    }

    return this.position;
  }

  moveLeft() {
    this.progress = 0;

    if (this.position == 0) {
      this.position = -this.maxRightPosition;
      this.getProgressBarWidth();
      this.index = this.numberOfCards - 1;
    } else {
      this.position += this.offset;
      this.getProgressBarWidth();
      this.index -= 1;
    }

    return this.position;
  }

  getProgressBarWidth() {
    this.arrProgressBars[this.index].nativeElement.style.width = `${this.progress}%`;
  }

  growthOfProgress(): void {
    setTimeout(() => {
      this.progress += 1;
      this.growthOfProgress();
    }, 80);

    this.getProgressBarWidth();

    if (this.progress === 100) {
      this.progress = 0;
      this.getProgressBarWidth();
      this.moveRight();
    }

    if (this.index > this.numberOfCards - 1) {
      this.index = 0;
    }
  }
}