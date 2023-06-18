import { Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Exercise } from '../exercise';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-routine-table',
  templateUrl: './routine-table.component.html',
  styleUrls: ['./routine-table.component.scss']
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
