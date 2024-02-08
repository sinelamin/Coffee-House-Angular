import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { DataMenuHandlerService } from './data-menu-handler.service';
import { MuneType } from '../../models/menu.model';

import { CoffeeCardsComponent } from './menu-cards/menu-cards.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CoffeeCardsComponent,
    ModalComponent,
    HttpClientModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [DataMenuHandlerService]
})
export class MenuComponent implements AfterViewInit, OnInit {

  constructor(private DataMenuHandlerService: DataMenuHandlerService) {}

  @ViewChildren('categories_list') categoriesList!: QueryList<ElementRef>;

  @ViewChildren('menu_card') cardsList!: QueryList<ElementRef>;

  @ViewChild('menu') menuSection!: ElementRef;

  categories = 'coffee';
  arrCategoriesList: ElementRef[] = [];
  modalActive = false;
  dataCardForModal: any;

  dataMenuCoffee: MuneType | undefined;
  dataMenuTea: MuneType | undefined;
  dataMenuDessert: MuneType | undefined;

  ngOnInit(): void {
    this.DataMenuHandlerService.getMenuData().subscribe({next:(data:any) => {
      this.dataMenuCoffee = data['coffee']
      this.dataMenuTea = data['tea']
      this.dataMenuDessert = data['dessert']
    }})
  }

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
        elem.nativeElement.children[0]
          .classList.add('categories-item__img--active');
      } else {
        elem.nativeElement.classList.remove('categories-item--active');
        elem.nativeElement.children[0]
          .classList.remove('categories-item__img--active');
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

  openModal() {
    this.modalActive = !this.modalActive;
  }

  closeModal() {
    this.modalActive = !this.modalActive;
  }

  handleDataCards(data: any) {
    this.dataCardForModal = data;
  }

}
