import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import dataMenu from './../../../assets/data/dataMenu.json'
import { MuneType } from '../../models/menu.model';

import { CoffeeCardsComponent } from './menu-cards/menu-cards.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CoffeeCardsComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {

  @ViewChildren('categories_list') categoriesList!: QueryList<ElementRef>;

  categories = 'coffee';

  arrCategoriesList: ElementRef[] = [];

  dataMenuCoffee: MuneType = dataMenu.coffee;
  dataMenuTea: MuneType = dataMenu.tea;
  dataMenuDessert: MuneType = dataMenu.dessert;

  ngAfterViewInit() {
    this.arrCategoriesList = this.categoriesList.toArray();
  }

  getCategories(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const parentTarget = target.parentElement;

    if (
      target.getAttribute('data-categories') === 'coffee' ||
      parentTarget?.getAttribute('data-categories') === 'coffee'
    ) {
      return this.categories = 'coffee';
    } else if (
      target.getAttribute('data-categories') === 'tea' ||
      parentTarget?.getAttribute('data-categories') === 'tea'
    ) {
      return this.categories = 'tea';
    } else {
      return this.categories = 'dessert';
    }
  }

  getDataOfCards(categories: string) {
    if (categories === 'coffee') {
      return this.dataMenuCoffee;
    } else if (categories === 'tea') {
      return this.dataMenuTea;
    } else {
      return this.dataMenuDessert;
    }
  }

  changeActiveCategories() {
    this.arrCategoriesList.forEach(elem => {
      if (elem.nativeElement.getAttribute('data-categories') === this.categories) {
        elem.nativeElement.classList.add('categories-item--active');
        elem.nativeElement.children[0].classList.add('categories-item__img--active');
      } else {
        elem.nativeElement.classList.remove('categories-item--active');
        elem.nativeElement.children[0].classList.remove('categories-item__img--active');
      }
    })
  }


  addActiveForCategories(elem: HTMLLIElement) {
    if (!elem.classList.contains('categories-item--active')) {
      elem.classList.add('categories-item--active');
    }
  }

  removeActiveForCategories(elem: HTMLLIElement) {
    if (elem.classList.contains('categories-item--active')) {
      elem.classList.remove('categories-item--active');
    }
  }
}
