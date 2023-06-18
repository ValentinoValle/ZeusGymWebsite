import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('nav') nav: ElementRef;
  
  navIsShowing: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 900 || this.navIsShowing) {
      this.nav.nativeElement.style.transform = 'translateX(0)';
    } else if (!this.navIsShowing) {
      this.nav.nativeElement.style.transform = 'translateX(100%)';
    }
  }

  showNav() {
    if (!this.navIsShowing) {
      this.nav.nativeElement.style.transform = 'translateX(0)';
      this.navIsShowing = true;
    } else {
      this.nav.nativeElement.style.transform = 'translateX(100%)';
      this.navIsShowing = false;
    }
  }
}
