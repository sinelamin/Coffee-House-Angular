import { Component } from '@angular/core';

import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { AboutComponent } from '../../components/about/about.component';
import { ApplicationComponent } from '../../components/application/application.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FavoriteComponent,
    AboutComponent,
    ApplicationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
