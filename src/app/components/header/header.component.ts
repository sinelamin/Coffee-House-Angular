import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollToFooter(): void {
    document.querySelector('#footer')?.scrollIntoView({behavior: 'smooth'});
  }

  burgerActiveState: boolean = false;

  burgerActive() {
    this.burgerActiveState = !this.burgerActiveState;
  }

  navigateClick() {
    this.burgerActiveState = false;
  }
}
