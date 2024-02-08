import { Component, OnInit, Input } from '@angular/core';
import { SliderCardComponent } from '../slider-card/slider-card.component';

import { HttpClientModule} from "@angular/common/http";
import { DataSliderHandlerService } from '../slider/data-slider-handler.service';

@Component({
  selector: 'app-slider-list',
  standalone: true,
  imports: [
    SliderCardComponent,
    HttpClientModule
  ],
  templateUrl: './slider-list.component.html',
  styleUrl: './slider-list.component.scss',
  providers: [DataSliderHandlerService]
})

export class SliderListComponent implements  OnInit {
  dataSliderCards: any;

  @Input() translateValue: any;

  constructor(private DataSliderHandlerService: DataSliderHandlerService) {}

  ngOnInit(): void {
    this.DataSliderHandlerService.getSliderData()
    .subscribe({next:(data:any) => this.dataSliderCards = data['coffee']});
  }
}
