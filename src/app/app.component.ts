import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AboutComponent } from './components/about/about.component';
import { ApplicationComponent } from './components/application/application.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FavoriteComponent,
    AboutComponent,
    ApplicationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
