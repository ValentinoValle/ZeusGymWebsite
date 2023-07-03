import { Component, ViewChildren, ElementRef, QueryList, Renderer2 } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Exercise } from '../../interfaces/exercise';

@Component({
  selector: 'app-routine-builder',
  templateUrl: './routine-builder.component.html',
  styleUrls: ['./routine-builder.component.scss']
})
export class RoutineBuilderComponent {
  
  constructor(private renderer: Renderer2) { }
  
  @ViewChildren('routineTables') dayTable: QueryList<ElementRef>;

  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  ExercisesByDay: Exercise[][] = [[], [], [], [], [], [], []];

  updateExercisesByDay(event: any[]) {
    if (event[1] === 'Monday') {
      this.ExercisesByDay.splice(0, 1, event[0])
    } else if (event[1] === 'Tuesday') {
      this.ExercisesByDay.splice(1, 1, event[0])
    } else if (event[1] === 'Wednesday') {
      this.ExercisesByDay.splice(2, 1, event[0])
    } else if (event[1] === 'Thursday') {
      this.ExercisesByDay.splice(3, 1, event[0])
    } else if (event[1] === 'Friday') {
      this.ExercisesByDay.splice(4, 1, event[0])
    } else if (event[1] === 'Saturday') {
      this.ExercisesByDay.splice(5, 1, event[0])
    } else if (event[1] === 'Sunday') {
      this.ExercisesByDay.splice(6, 1, event[0])
    }
  }

  exportPdf() {
    

    const doc = new jsPDF();
    this.ExercisesByDay.forEach((exerciseArr, i) => {
      let values = exerciseArr.map((el) => Object.values(el));
      autoTable(doc, {
        head: [[this.weekDays[i]]],
        body: values
      })
    })
    doc.output('dataurlnewwindow')
  }

  isOnView(hasIntersection: boolean, el: HTMLElement) {
    if (hasIntersection) {
      this.renderer.removeClass(el, 'hide')
    };
  }
}
