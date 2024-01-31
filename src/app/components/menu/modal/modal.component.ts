import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() modalHide = new EventEmitter<any>();

  @Input() dataCards: any;

  clickToClose() {
    this.modalHide.emit();
  }
}
