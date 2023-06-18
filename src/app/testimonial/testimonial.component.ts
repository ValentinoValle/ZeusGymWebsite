import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() imgSource: string;
  @Input() name: string;
  @Input() profession: string;
  @Input() quote: string;
}
