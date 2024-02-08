import { Component} from '@angular/core';

import { OfferComponent } from '../../components/offer/offer.component';
import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { AboutComponent } from '../../components/about/about.component';
import { ApplicationComponent } from '../../components/application/application.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OfferComponent,
    FavoriteComponent,
    AboutComponent,
    ApplicationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
