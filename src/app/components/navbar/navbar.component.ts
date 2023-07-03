import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  navIsShowing: boolean = false;

  constructor(private renderer: Renderer2) { }

  showNav() {
    if (!this.navIsShowing) {
      this.navIsShowing = true;
    } else {
      this.navIsShowing = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
