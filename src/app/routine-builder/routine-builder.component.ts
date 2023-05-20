import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-routine-builder',
  templateUrl: './routine-builder.component.html',
  styleUrls: ['./routine-builder.component.scss']
})
export class RoutineBuilderComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(private service: ExercisesService) { }

  ngOnInit() {
    this.service.getExercises('biceps')
      .subscribe({
        next: (data) => this.exercises = data,
        error: (error) => console.log(error.message)        
      });
  }
  
  logExercises() {
    console.log(this.exercises);
  }
}
