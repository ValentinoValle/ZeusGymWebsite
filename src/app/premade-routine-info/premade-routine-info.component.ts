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

  days: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
 
  routines: Routine[] = [
    {
      name: "Push Pull Legs",
      monday: ["Squat", "Calf Raise", "Leg Press", "RDL", "Seated Calf Raise"],
      tuesday: ["Bench Press", "Overhead Press", "Push Up", "Lateral Raise", "Tricep Pushdown"],
      wednesday: ["PullUp", "Pulldown", "Chest Supported Row", "Bicep Curl", "Bent Over Row"],
      thursday: ["Deadlift", "Leg Extension", "Bulgarian Split Squat", "Lying Leg Curl", "Calf Raise"],
      friday: ["Inc Bench Press", "Tricep Extension", "Lateral Raise", "Cable Lateral Raise", "Cable Fly"],
      saturday: ["PullUp", "Dumbell Row", "Reverse Peck Deck", "Bicep Curl", "Hammer Curl"],
      sunday: ["Rest"]
    },
    {
      name: "Upper Lower",
      monday: ["Bench Press", "Bent Over Row", "Inc Bench Press", "Pulldown", "Lateral Raise"],
      tuesday: ["Squat", "Lying Leg Curl", "Calf Raise", "Leg Extension", "Seated Calf Raise"],
      wednesday: ["Rest"],
      thursday: ["Overhead Press", "Inc Bench Press", "Reverse Peck Deck", "Lateral Raise", "Drag Curl"],
      friday: ["RDL", "Leg Extension", "Lying Leg Curl", "Calf raise", "Hip Thrust"],
      saturday: ["Rest"],
      sunday: ["Rest"]
    },
    {
      name: "Fullbody",
      monday: ["Bench Press", "Pulldown", "Leg Press", "Bicep Curl", "Calf Raise"],
      tuesday: ["Squat", "Bent Over Row", "Lying Leg Curl", "Overhead Press", "Tricep Extension"],
      wednesday: ["Pullup", "Inc Bench Press", "Lat Prayer", "Tricep Pushdown", "Seated Calf Raise"],
      thursday: ["Deadlift", "Leg Extension", "Lateral raise", "Inc Dubmell Curl", "Pulldown"],
      friday: ["Cable Fly", "Chest Supported Row", "Calf Raise", "RDL", "Bicep Curl"],
      saturday: ["Rest"],
      sunday: ["Rest"]
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
