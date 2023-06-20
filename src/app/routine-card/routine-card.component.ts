import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss']
})
export class RoutineCardComponent implements OnInit {
  
  // buttonRoute: string;
  // baseRoute: string = "../../premadeRoutines";

  constructor(private router: ActivatedRoute) { }

  @Input() imgSource: string;
  @Input() attributionName: string;
  @Input() attributionLink: string;
  @Input() attributionSite: string;
  @Input() attributionSiteLink: string;
  @Input() routineName: string;
  @Input() description: string;
  @Input() buttonLink: string;

  ngOnInit(): void {
    // this.buttonRoute = this.buttonLink;
    // console.log(this.buttonRoute);
     
  }

  // toggleRoute() {
  //   this.router.params.subscribe(params => {
  //     if (params['routine'] == 'ppl' 
  //       || params['routine'] == 'upperlower'
  //       || params['routine'] == 'fullbody') {
  //       console.log("hola");
            
  //       this.buttonLink = this.baseRoute;
  //     } else {
  //       this.buttonLink = this.buttonRoute;
  //     }
  //     console.log(params);
  //   })
  // }

  encapsulation: ViewEncapsulation.None
}
