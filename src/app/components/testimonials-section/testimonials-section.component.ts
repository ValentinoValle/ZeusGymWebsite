import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  testimonialsArr = [
    {
      source: 'assets/profile-pics/pexels-emily-garland-1499327.jpg',
      name: 'Sara Johnson',
      profession: 'ui designer',
      quote: 'This gym is incredible, I made unbelievable progress in only six months, I would absolutely recommend.',
      attribution: 'Photo by Emily Garland'
    },
    {
      source: 'assets/profile-pics/pexels-masha-raymers-2726111.jpg',
      name: 'Emily Doe',
      profession: 'Frontend Developer',
      quote: 'Very well made routines, and the staff is always very helpfull and willing to answer any question you have. Loved it',
      attribution: 'Photo by Masha Raymers'
    },
    {
      source: 'assets/profile-pics/pexels-nathan-cowley-634021.jpg',
      name: 'Nathan Raymers',
      profession: 'Backend Developer',
      quote: 'The staff was nice and the routines were good and very well planed out. I was stuck in my fitness journey but not anymore.',
      attribution: 'Photo by Nathan Cowley'
    },
    {
      source: 'assets/profile-pics/pexels-pixabay-220453.jpg',
      name: 'Gabriel Peters',
      profession: 'Software Engineer',
      quote: 'Loved how you can build your own routine completely for free, and the premade ones were also great. Would recommend',
      attribution: 'Photo by Pixabay'
    },
    {
      source: 'assets/profile-pics/pexels-pixabay-415829.jpg',
      name: 'Natasha Kim',
      profession: 'Community Manager',
      quote: 'I thought fitness was not a thing for me, but this gym made me change my mind. Never thought I could make this much progress.',
      attribution: 'Photo by Pixabay'    
    },
    {
      source: 'assets/profile-pics/pexels-sindre-fs-1040881.jpg',
      name: 'Andre Winters',
      profession: 'Fullstack Developer',
      quote: 'I feel bigger and stronger than ever, loved the routines, the supportive staff and the attention to detail. Completely recommend it',
      attribution: 'Photo by Sindre Fs'    
    }];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 2
      },
      1100: {
        items: 3
      },
      1350: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private renderer: Renderer2) { }

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
