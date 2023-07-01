import { Component, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  constructor(private renderer: Renderer2) { }

  encapsulation: ViewEncapsulation.None

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
