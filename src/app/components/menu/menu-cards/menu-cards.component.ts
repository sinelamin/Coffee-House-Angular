import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
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
  }

  @Output() modalShow = new EventEmitter<any>();

  openCard() {
    this.modalShow.emit();
  }

  @Output() dataCards: EventEmitter<any> = new EventEmitter();

  giveDataCardsToParents() {
    this.dataCards.emit(this.cardValue);
  }
}
