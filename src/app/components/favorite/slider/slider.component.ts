import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
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

export class SliderComponent implements OnInit, AfterViewInit {

  startPoint = 0;
  numberOfCards = dataSlider.coffee.length;
  position = this.startPoint;
  offset = 480;
  maxRightPosition = this.offset * (this.numberOfCards - 1);

  progress = 0;
  index = 0;
  arrProgressBars: ElementRef[] = [];

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


  @ViewChildren('progress') progressBars!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.arrProgressBars = this.progressBars.toArray();
    this.growthOfProgress();
  }

  getProgressBarWidth() {
    this.arrProgressBars[this.index].nativeElement.style.width = `${this.progress}%`;
  }

  growthOfProgress(): void {
    setTimeout(() => {
      this.progress += 1;
      this.growthOfProgress();
    }, 20);

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

  ngOnInit(): void {
    // this.growthOfProgress();
  }
}