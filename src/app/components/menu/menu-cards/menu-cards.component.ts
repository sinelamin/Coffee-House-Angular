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

  @Output() modalShow = new EventEmitter<any>();

  openCard() {
    this.modalShow.emit();
  }

  // clickCard() {
  //   // console.log(this.arrCardsList[0].nativeElement);
  //   // console.log(this.cardValue);
  // }

  @Output() dataCards: EventEmitter<any> = new EventEmitter();

  giveDataCardsToParents() {
    this.dataCards.emit(this.cardValue);
  }
}
