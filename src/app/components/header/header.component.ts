import { Component } from '@angular/core';
import { HeaderOfferComponent } from './header-offer/header-offer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderOfferComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
