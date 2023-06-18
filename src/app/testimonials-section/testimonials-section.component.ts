import { Component, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  testimonialsArr = [
    {
      source: '../../assets/profile-pics/pexels-emily-garland-1499327.jpg',
      name: 'Emily Garland',
      profession: 'ui designer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'
    },
    {
      source: '../../assets/profile-pics/pexels-masha-raymers-2726111.jpg',
      name: 'Masha Raymers',
      profession: 'Frontend Developer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'
    },
    {
      source: '../../assets/profile-pics/pexels-nathan-cowley-634021.jpg',
      name: 'Nathan Cowley',
      profession: 'Backend Developer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'
    },
    {
      source: '../../assets/profile-pics/pexels-pixabay-220453.jpg',
      name: 'Joshua Peters',
      profession: 'Software Engineer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'
    },
    {
      source: '../../assets/profile-pics/pexels-pixabay-415829.jpg',
      name: 'Sara Kim',
      profession: 'Community Manager',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'      
    },
    {
      source: '../../assets/profile-pics/pexels-sindre-fs-1040881.jpg',
      name: 'Andre Johnson',
      profession: 'Fullstack Developer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat sit possimus maxime, necessitatibus nam?'      
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
}
