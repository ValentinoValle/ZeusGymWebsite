import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Exercise } from '../exercise';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-routine-table',
  templateUrl: './routine-table.component.html',
  styleUrls: ['./routine-table.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(".2s ease-in-out", style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(".2s ease-in-out", style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class RoutineTableComponent {

  constructor() {}

  @Input() day: string;

  @Output() currentExercises = new EventEmitter<any[]>

  @ViewChild('dayTable') dayTable: ElementRef;
  exercises: Exercise[] = [];

  addNewExercise(newExercise: Exercise) {
   this.exercises.push(newExercise);
   this.emitCurrentExercises();
  }

  deleteExercise(i: number) {
    this.exercises.splice(i, 1)
  }

  emitCurrentExercises() {
    this.currentExercises.emit([this.exercises, this.day])
  }
}
