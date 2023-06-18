import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss']
})
export class RoutineCardComponent {
  
  constructor() { }

  @Input() imgSource: string;
  @Input() attributionName: string;
  @Input() attributionLink: string;
  @Input() attributionSite: string;
  @Input() attributionSiteLink: string;
  @Input() routineName: string;
  @Input() description: string;
  @Input() buttonLink: string;

  encapsulation: ViewEncapsulation.None
}
