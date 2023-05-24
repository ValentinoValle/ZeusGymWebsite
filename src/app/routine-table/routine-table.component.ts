import { Component, ViewChild, ElementRef } from '@angular/core';
import { Exercise } from '../exercise';
import { MatDialog } from '@angular/material/dialog'
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-routine-table',
  templateUrl: './routine-table.component.html',
  styleUrls: ['./routine-table.component.scss']
})
export class RoutineTableComponent {

  constructor(public dialog: MatDialog) {}

  @ViewChild('dayTable') dayTable: ElementRef;
  exercises: Exercise[] = [];

  addNewExercise(newExercise: Exercise) {
   this.exercises.push(newExercise);
  }

  deleteExercise(i: number) {
    this.exercises.splice(i, 1)
  }
}
