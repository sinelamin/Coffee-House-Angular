import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMenuHandlerService {

  constructor(private jsonMenu: HttpClient) { }

  getMenuData() {
    return this.jsonMenu.get('assets/data/dataMenu.json');
  }
}
