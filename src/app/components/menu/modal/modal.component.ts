import { Component, EventEmitter, Output, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {
  @Output() modalHide = new EventEmitter<any>();

  @Input() dataCards: any;

  @ViewChildren('modal_item') modalTtems!: QueryList<ElementRef>;
  @ViewChildren('size') sizeList!: QueryList<ElementRef>;
  @ViewChildren('additives') additiveList!: QueryList<ElementRef>;

  arrModalTtems: ElementRef[] = [];
  arrSizeList: ElementRef[] = [];
  arrAdditiveList: ElementRef[] = [];

  ngAfterViewInit(): void {
    this.arrSizeList = this.sizeList.toArray();
    this.arrAdditiveList = this.additiveList.toArray();
  }

  clickToClose(): void {
    this.modalHide.emit();
  }

  changSizeActive(event: MouseEvent): void {
    const currentTarget = event.currentTarget as HTMLElement;

    this.arrSizeList.forEach((item) => {
      item.nativeElement.classList.remove('modal-item--active');
    })

    currentTarget.classList.add('modal-item--active');
  }

  changAdditivesActive(event: MouseEvent): void {
    const currentTarget = event.currentTarget as HTMLElement;
    
    if (currentTarget.classList.contains('modal-item--active')) {
      currentTarget.classList.remove('modal-item--active');
    } else {
      currentTarget.classList.add('modal-item--active');
    }
  }

  getTotalPrice(): string {
    const totalPrice = +this.dataCards?.price + this.addSizePrice() + this.addAdditivesPrice();

    return `${totalPrice.toFixed(2)}`;
  }

  addSizePrice(): number {
    let totalSizePrice: number = 0;
    const sizeLiteral: string[] = ['s', 'm', 'l'];

    this.arrSizeList.forEach((item, index) => {
      if (item.nativeElement.classList.contains('modal-item--active')) {
        totalSizePrice = +this.dataCards?.sizes[`${sizeLiteral[index]}`]['add-price'];
      }
    })

    return totalSizePrice;
  }

  addAdditivesPrice(): number {
    let totalAdditivesPrice: number = 0;

    this.arrAdditiveList.forEach((item, index) => {
      if (item.nativeElement.classList.contains('modal-item--active')) {
        totalAdditivesPrice += +(this.dataCards?.additives[index + 1]['add-price']);
      }
    })

    return totalAdditivesPrice;
  }
}
