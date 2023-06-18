import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routine } from '../routine';

@Component({
  selector: 'app-premade-routine-info',
  templateUrl: './premade-routine-info.component.html',
  styleUrls: ['./premade-routine-info.component.scss']
})
export class PremadeRoutineInfoComponent implements OnInit {
  routine: Routine;

  routines: Routine[] = [
    {
      name: "Push, Pull, Legs",
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    },
    {
      name: "Upper, Lower",
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    },
    {
      name: "Fullbody",
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    },
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      switch (params['routine']) {
        case 'ppl':
          this.routine = this.routines[0];
          break;
        case 'upperlower':
          this.routine = this.routines[1];
          break;
        case 'fullbody':
          this.routine = this.routines[2];
          break;
      }
    });


  }
}
