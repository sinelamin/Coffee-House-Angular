import { Component, EventEmitter, Input, Output, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-menu-cards',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './menu-cards.component.html',
  styleUrl: './menu-cards.component.scss'
})
export class CoffeeCardsComponent implements AfterViewInit {
  @Input() cardValue: any;

  @ViewChildren('menu_card') cardsList!: QueryList<ElementRef>;

  arrCardsList: ElementRef[] = [];

  ngAfterViewInit() {
    this.arrCardsList = this.cardsList.toArray();

    // console.log('arrCardsList', this.arrCardsList[0].nativeElement);
  }

  @Output() onClick = new EventEmitter<any>();

  click() {
    this.onClick.emit();
  }

  clickCard() {
    // console.log(this.arrCardsList[0].nativeElement);
    // console.log(this.cardValue);
  }

  @Output() dataChanged: EventEmitter<any> = new EventEmitter();

  someMethod() {
    // Вызовите это, когда данные изменятся и их нужно отправить родителю
    this.dataChanged.emit(this.cardValue);
  }
}
