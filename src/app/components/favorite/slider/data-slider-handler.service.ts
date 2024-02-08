import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSliderHandlerService {

  constructor(private jsonSlider: HttpClient) { }

  getSliderData() {
    return this.jsonSlider.get('assets/data/dataSlider.json');
  }
}
