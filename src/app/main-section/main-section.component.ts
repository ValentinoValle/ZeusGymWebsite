import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

  constructor(private renderer: Renderer2) { }

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
